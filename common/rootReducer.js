import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import mainLayoutReducer from './main-layout/mainLayoutReducer';
import searchReducer from './search/searchReducer';
import foodProductReducer from './food-product/foodProductReducer';
import profileReducer from './profile/profileReducer';

const rootReducer = combineReducers({
  layout: mainLayoutReducer,
  search: searchReducer,
  foodProduct: foodProductReducer,
  profile: profileReducer,
  routing: routerReducer
});

export default rootReducer;
