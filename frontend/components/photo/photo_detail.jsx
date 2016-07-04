"use strict";

const React = require('react');
const PhotoActions = require('../../actions/photo_actions');
const PhotoStore = require('../../stores/photo_store');

const PhotoDetail = React.createClass({
  setTargetPhoto (newProps) {
    if(this.id === undefined) {
      let path = newProps.location.pathname;
      this.id = parseInt(path.replace('/photos/', ''));

      this.setState({
        photo: PhotoStore.find(this.id)
      });
    } else {
      let path = this.props.location.pathname;
      let oldId = this.id;

      path = newProps.location.pathname;
      this.id = parseInt(path.replace('/photos/', ''));

      if (this.id !== oldId) {
        this.setState({
          photo: PhotoStore.find(this.id)
        });
      }
    }
  },

  getInitialState() {
    return {
      photo: {
        id: undefined,
        title: "Photo Title",
        description: "Photo Description"
      }
    };
  },

  componentWillReceiveProps(newProps) {
    this.setTargetPhoto(newProps);
  },

  componentDidMount() {
    this.listener = PhotoStore.addListener(this.onReceivedPhoto);
    PhotoActions.fetchPhoto(this.props.params.id);
  },

  componentWillUnmount () {
    this.listener.remove();
  },

  onReceivedPhoto () {
    console.log(PhotoStore.find(this.props.params.id));

    this.setState({
      photo: PhotoStore.find(this.props.params.id)
    });
  },

  render () {
    let photo = this.state.photo;
    //
    // let photoCheck = PhotoStore.find(this.id);
    //
    // let empty = (Object.keys(photoCheck).length === 0 && photoCheck.constructor === Object);
    //
    // let className = (!empty ? "photo-detail-container" : "hidden");

    return (
      <div className={"thank-fuck"}>
        <h1>{photo.title}</h1>
      </div>
    );
  }
});

module.exports = PhotoDetail;
