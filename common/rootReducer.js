import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import mainLayoutReducer from './main-layout/mainLayoutReducer';
import searchReducer from './search/searchReducer';
import foodProductReducer from './food-product/foodProductReducer';
import profileReducer from './profile/profileReducer';
import addPostReducer from './shared/add-post/addPostReducer';
import commentReducer from './shared/comment/commentsReducer';
import postsReducer from './shared/post/postsReducer';
import recReducer from './user-app/user-rec/recReducer';
import mediaReducer from './shared/media/mediaReducer';
import postsReducer from './user-app/post/postsReducer';
import liveReducer from './user-app/live/liveReducer';

const rootReducer = combineReducers({
  layout: mainLayoutReducer,
  search: searchReducer,
  foodProduct: foodProductReducer,
  profile: profileReducer,
  addPost: addPostReducer,
  routing: routerReducer,
  comment: commentReducer,
  post: postsReducer,
  rec: recReducer,
  media: mediaReducer,
  live: liveReducer
});

export default rootReducer;
