import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './../common/configureStore';
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

import FoodProduct from './../common/food-product/FoodProduct';

ReactDOM.render(
  <Provider store={store}>
    <FoodProduct />
  </Provider>,
  document.querySelector('.root')
);
