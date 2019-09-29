import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
// import AOS from 'aos';

// Import scenes
import Home from './scenes/Home/Home';

// Import modals

/** Import redux actions */

class App extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route path="/" render={props => <Home {...props} />} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default App;
