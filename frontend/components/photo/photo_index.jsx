"use strict";

const React = require('react');
// const PhotoForm = require('./photo_form');
const IndexItem = require('./photo_index_item');

const PhotoDetail = require('./photo_detail');
const PhotoStore = require('../../stores/photo_store');
const PhotoActions = require('../../actions/photo_actions');

const PhotoIndex = React.createClass({
  //Set state for detail and form here.
  getInitialState () {
    return {
      photos: PhotoStore.all()
    };
  },

  componentDidMount () {
    this.listener = PhotoStore.addListener(this.onChange);
    PhotoActions.fetchAllPhotos();
  },

  componentWillUnmount () {
    this.listener.remove();
  },

  onChange () {
    this.setState({photos: PhotoStore.all()});
  },

  render () {
    let photoKeys = Object.keys(this.state.photos);

    return (
      <div>
      <div className="photo-index-container">
        <div className="photo-index">
            {
              photoKeys.map( key => {
                return (
                  <IndexItem photo={this.state.photos[key]} key={key} />
                );
              })
            }
        </div>
      </div>
      {this.props.children}
      </div>
    );
  }
});

// <PhotoForm />
module.exports = PhotoIndex;
