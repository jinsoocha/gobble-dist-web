import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './../common/configureStore';
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

import FoodProductContainer from './../common/food-product/FoodProductContainer';

ReactDOM.render(
  <Provider store={store}>
    <FoodProductContainer />
  </Provider>,
  document.querySelector('.root')
);
