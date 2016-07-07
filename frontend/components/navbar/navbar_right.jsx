const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const PhotoActions = require('../../actions/photo_actions.js');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');

const NavBarRight = React.createClass({

  uploadImage() {
    cloudinary.openUploadWidget({ cloud_name: 'mrcapstone',
                                  upload_preset: 'gvnvjyr9',
                                  theme: "minimal"
                                  },
            function(error, result) {
              if (error) { console.log(error); } else {
              let photo_url = result[0].secure_url;
              let title = prompt('What is the title of this picture ?');
              let description = prompt('What is the description of this picture ?');
              let photo = {title: title,
                          description: description,
                          photo_url: photo_url,
                          user_id: SessionStore.currentUser().id};
              PhotoActions.createPhoto(photo);
              hashHistory.push("photos/");
            };
            });
  },

  render () {

    if (SessionStore.isUserLoggedIn()) {

    return (
    		<div className='navbar-right'>
    			<a className="header-button" onClick={ SessionActions.logOut }>Log Out</a>
          <a className="upload-button" onClick={this.uploadImage}>Upload Image</a>
    		</div>
    	);

    }  else {

    return (
      <div className='navbar-right'>
        <Link to="/signup" className="navigation-link">Sign Up</Link>
        <Link to="/login" className="navigation-link">Log In</Link>

      </div>
    );
  }
  }
});

module.exports = NavBarRight;
