import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './../common/configureStore';
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

import Profile from './../common/profile/Profile';

ReactDOM.render(
  <Provider store={store}>
    <Profile />
  </Provider>,
  document.querySelector('.root')
);
