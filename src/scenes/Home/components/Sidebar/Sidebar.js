import React from 'react';

/** Import assets */
import Logo from 'assets/images/logo.jpg';
import  './sidebar.css';
class Sidebar extends React.Component {
  render() {
    const props = this.props;

    return (
      <div className = "sideBar">
        <img src = {Logo} />
        <div className = "sideText">
          <div className = "title">Articles</div>
          <div className = "article">Healthy Nutrition on the Go</div>
          <hr/>
          <div className = "article">The Most Important Supplements For Every Body</div>
          <hr/>
          <div className = "article">Our Favorite items of the Month</div>
          <hr/>
          <div className = "article">The 20-Minute, No-Weight, Full-Body Workout</div>
          <hr/>
          <div className = "article">Podcast Episode 72 - Hannah Eden: ''Fitness is Not About Winning, It's About Moving'</div>
          <hr/>
          <br/>
          <br/>
          <div className = "title">Tips</div>
          <div className = "article">Exercises That At Least Two Muscle Groups At Once</div>
          <hr/>
          <div className = "article">Fuel Your Body Right Before And After The Workout</div>
          <hr/>
        </div>
      </div>
    );
  }
}

export default Sidebar;
