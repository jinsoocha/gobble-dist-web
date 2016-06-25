import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './../common/configureStore';
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

import UserApp from './../common/user-app/UserApp';

ReactDOM.render(
  <Provider store={store}>
    <UserApp />
  </Provider>,
  document.querySelector('.root')
);
