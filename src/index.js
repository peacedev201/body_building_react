import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import App from './App';
import './assets/fonts/font-awesome/scss/font-awesome.css';
import 'assets/scss/restaurant_admin.css';
import 'global.css';


const target = document.querySelector('#root');
console.log(history);
render(
  <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
          <App />
    {/* </ConnectedRouter> */}
  </Provider>,
  target
);