const React = require('react');

const NavBarRight = require('./navbar_right.jsx');

const Link = require('react-router').Link;

const NavBar = React.createClass({
  

  render () {
    return(
      <div className='navbar'>
        <header>
          <Link to="/photos" className="header"><h1>Slickr</h1></Link>
        </header>
        <NavBarRight />
      </div>
    );
  }
});

module.exports = NavBar;
