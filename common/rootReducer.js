import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import mainLayoutReducer from './main-layout/mainLayoutReducer';
import searchReducer from './search/searchReducer';
import foodProductReducer from './food-product/foodProductReducer';
import profileReducer from './profile/profileReducer';
import addPostReducer from './shared/add-post/addPostReducer';
import commentReducer from './user-app/comment/commentsReducer';
import postsReducer from './user-app/post/postsReducer';

const rootReducer = combineReducers({
  layout: mainLayoutReducer,
  search: searchReducer,
  foodProduct: foodProductReducer,
  profile: profileReducer,
  addPost: addPostReducer,
  routing: routerReducer
  routing: routerReducer,
  comment: commentReducer,
  post: postsReducer
});

export default rootReducer;
