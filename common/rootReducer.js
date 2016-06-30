import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import mainLayoutReducer from './main-layout/mainLayoutReducer';
import searchReducer from './search/searchReducer';
import foodProductReducer from './food-product/foodProductReducer';

const rootReducer = combineReducers({
  layout: mainLayoutReducer,
  search: searchReducer,
  foodProduct: foodProductReducer,
  routing: routerReducer
});

export default rootReducer;
