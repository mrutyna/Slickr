"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const NavBar = require('../components/navbar/navbar.jsx');

const HomeVideo = require('./home_video.jsx');

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;



const App = React.createClass({

  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  render() {

    return (
      <div>
        <NavBar />
        <HomeVideo location={this.props.location}/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
