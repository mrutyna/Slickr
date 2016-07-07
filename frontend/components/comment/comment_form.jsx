const React = require("react");
const ReactDOM = require("react-dom");
const HashHistory = require('react-router').hashHistory;
const PhotoActions = require('../../actions/photo_actions');
const SessionStore = require('../../stores/session_store');

var CommentForm = React.createClass({

  getInitialState: function() {
    return {body: "", opacity: 0};
  },

  componentDidMount: function() {
    var self = this;

    ReactDOM.findDOMNode(self.refs.autoFocus).focus();

    this.setState({opacity: 100});
  },

  bodyChange: function(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  },

  submitHandler: function(e) {
    e.preventDefault();
    PhotoActions.createComment({
      body: this.state.body,
      photo_id: this.props.photoId,
      user_id: SessionStore.currentUser().id
    });
    this.setState({body: ""});
    PhotoActions.fetchPhoto(this.props.photoId);
  },

  render: function() {
    return (
      <div className="comment-form-box" style={{opacity: this.state.opacity}}>
        <div className="comment-form">
          <form className="comment-form" onSubmit={this.submitHandler}>
            <textarea
              className="comment-form-textarea"
              ref="autoFocus"
              value={this.state.body}
              onChange={this.bodyChange}
              placeholder="What's on your mind?"
              ></textarea>
              <div className="btn comment-form-submit-btn" onClick={this.submitHandler}>Comment</div>
          </form>
        </div>

      </div>
    );
  }
});

module.exports = CommentForm;
