import React from 'react';
import { Route, Switch } from 'react-router-dom';

/** Import components */
import TopNav from './components/TopNav/TopNav';
import Sidebar from './components/Sidebar/Sidebar';

/** Import scenes */
import Landing from './scenes/Home';
import Exercise from './scenes/Exercise';
import Food from './scenes/Food';
import Supplements from './scenes/Supplements';
import backgroundImg  from 'assets/images/background.png';
/** Import assets */
import './home.css';

class Home extends React.Component {
  render() {

    // if (this.props.location.pathname === '/') {
    //   window.location.href = '/home';
    // }

    return (
      <div>
        <img src = {backgroundImg} className = "background"/>
        <div id="home" className="home-container">
            
            <div className="container-fluid scenes-container">
              <div className = "sidebar-container">
                  <Sidebar/>
              </div>
              <div className = "main-container">
                <TopNav/>
                <Switch>
                  <Route path="/"           exact render={props => <Landing     {...props} />}  />
                  <Route path="/home"        render={props => <Landing     {...props} />}  />
                  <Route path="/exercise"    render={props => <Exercise    {...props} />} />
                  <Route path="/food"        render={props => <Food        {...props} />} />
                  <Route path="/supplements" render={props => <Supplements {...props} />} />
                </Switch>
              </div>
            </div>
          </div>
      </div>
     
    );
  }
}
export default Home;