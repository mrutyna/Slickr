var React = require("react");
var ReactDOM = require("react-dom");


const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const HomeVideo = React.createClass({

  getInitialState() {
    if (!["/", "/login", "/signup"].includes(this.props.location.pathname)) {
      return({show: false})
    } else {return({show: true})}
  },

  componentWillReceiveProps(newProps) {
    let background
    
    if (!["/", "/login", "/signup"].includes(newProps.location.pathname)) {
      this.setState({show: false})
    } else {this.setState({show: true})}
    
  },
  
  render() {
      
      let show;
      
      
    if(this.state.show) {
        show = (<div className="splash-page" id="fullscreen-bg">
        <video loop muted autoPlay poster="http://res.cloudinary.com/mrcapstone/image/upload/v1467852561/Blurry-Lights_pl2rqd.jpg" className="fullscreen-bg__video">
          <source src="http://res.cloudinary.com/mrcapstone/video/upload/v1467852566/Blurry-Lights_ynqyk2.webm" type="video/webm"/>
          <source src="http://res.cloudinary.com/mrcapstone/video/upload/v1467852568/Blurry-Lights_kwoqqm.mp4" type="video/mp4"/>
          <source src="http://res.cloudinary.com/mrcapstone/video/upload/v1467852568/Blurry-Lights_jyluqb.ogv" type="video/ogg"/>
        </video>
      </div>)
    } else { 
      show = (<div className="thisVideoWasHidden"></div>)}

    return (
        <div>{show}</div>
    );
  }
});

module.exports = HomeVideo;