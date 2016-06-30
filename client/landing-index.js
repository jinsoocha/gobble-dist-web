import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './../common/configureStore';
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

import Landing from './../common/landing/Landing';

ReactDOM.render(
  <Provider store={store}>
    <Landing />
  </Provider>,
  document.querySelector('.root')
);
