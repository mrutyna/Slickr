const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');

const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const NavBarRight = React.createClass({

  render () {



    return (
      <div className='navbar-right'>
        <Link to="/signup" className="navigation-link">Sign Up!</Link>
        <Link to="/login" className="navigation-link">Log In!</Link>

      </div>
    );
  }
});

module.exports = NavBarRight;
