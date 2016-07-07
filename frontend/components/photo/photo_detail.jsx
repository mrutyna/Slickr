"use strict";

const React = require('react');
const PhotoActions = require('../../actions/photo_actions');
const PhotoStore = require('../../stores/photo_store');
const hashHistory = require('react-router').hashHistory;

const CommentForm = require('../comment/comment_form');

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
        description: "Photo Description",
        comments: []
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
    this.setState({
      photo: PhotoStore.find(this.props.params.id)
    });
    console.log(this.state);
  },

  onChange(e) {
    let newPhoto = this.state.photo;
    newPhoto.description = e.currentTarget.value;

    this.setState({photo: newPhoto});
  },

  handleExit() {
    let newPhoto = this.state.photo;
    newPhoto.description = this.state.photo.description;
    PhotoActions.editPhoto(newPhoto);
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
      <div className="main">
      <div className={"photo-detail"}>
        <h1 className={"photo-detail-title"}>{photo.title}</h1>
        <img  className={"photo-detail-img"} src={photo.photo_url}/>
        <textarea className={"photo-detail-textarea"}
                  onChange={this.onChange}
                  onBlur={this.handleExit}
                  value={this.state.photo.description}/>
        <div className="btn back-button" onClick={() => hashHistory.push("photos")}>Back to All Photos</div>
        <CommentForm className="comment-form" photoId={photo.id} />
        <ul className="comment-list">
          {
          photo.comments.map( (comment) => {
              return (
                <li className="comment-item" key={comment.id}>{comment.body}</li>
              );
            })
          }
          </ul>
      </div>
      </div>
    );
  }
});

module.exports = PhotoDetail;
