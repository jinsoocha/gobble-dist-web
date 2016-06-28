import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './../common/configureStore';
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

import Search from './../common/search/Search';

ReactDOM.render(
  <Provider store={store}>
    <Search />
  </Provider>,
  document.querySelector('.root')
);
