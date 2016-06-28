import { combineReducers } from 'redux';
import mainLayoutReducer from './main-layout/mainLayoutReducer';
import searchReducer from './search/searchReducer';

const rootReducer = combineReducers({
  layout: mainLayoutReducer,
  search: searchReducer
});

export default rootReducer;
