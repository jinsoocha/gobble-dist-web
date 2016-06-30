import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import mainLayoutReducer from './main-layout/mainLayoutReducer';
import searchReducer from './search/searchReducer';

const rootReducer = combineReducers({
  layout: mainLayoutReducer,
  search: searchReducer,
  routing: routerReducer
});

export default rootReducer;
