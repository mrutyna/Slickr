"use strict";

const React = require('react');
const hashHistory = require('react-router').hashHistory;
const PhotoActions = require('../../actions/photo_actions');

const PhotoIndexItem = React.createClass({
  getInitialState () {
    return {title: ""};
  },

  componentDidMount () {
    // this.setState({title: this.props.photo.title});
  },

  handleChange(e) {
    // this.setState({title: e.currentTarget.value});
  },

  // handleKeyPress (e) {
  //   if (e.keyCode === 13) {
  //     this.handleExit(e);
  //   }
  //
  //   if (e.keyCode === 8 || e.keyCode === 46) {
  //     if (this.state.title === "") {
  //       e.preventDefault();
  //       this.deletePhoto();
  //     }
  //   }
  // },

  handleClick() {
    const photoID = this.props.photo.id;
    hashHistory.push("photos/" + photoID );
  },

  deletePhoto() {
    PhotoActions.deletePhoto(this.props.photo.id);
  },

  render() {
    return (
      <li className="photo-item" onClick={this.handleClick}>
        <div onClick={this.handleClick} className="photo-url-index-item"><img  src={this.props.photo.photo_url}/></div>
      </li>
    );
  }

  // render() {
  //   let photo = this.props.photo;
  //   return (
  //       <input className="photo-index-item"
  //            onClick={this.handleClick}
  //            value={this.state.title}
  //            onChange={this.handleChange}
  //            onBlur={this.handleExit}
  //            onKeyDown={this.handleKeyPress}>
  //       </input>
  //   );
  // }
});

// <button onClick={this.deletePhoto}>delete</button>

module.exports = PhotoIndexItem;
