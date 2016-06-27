import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './../common/configureStore';
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

import FoodLanding from './../common/food-landing/FoodLanding';

ReactDOM.render(
  <Provider store={store}>
    <FoodLanding />
  </Provider>,
  document.querySelector('.root')
);
