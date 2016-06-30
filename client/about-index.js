import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './../common/configureStore';
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

import About from './../common/about/About';

ReactDOM.render(
  <Provider store={store}>
    <About />
  </Provider>,
  document.querySelector('.root')
);
