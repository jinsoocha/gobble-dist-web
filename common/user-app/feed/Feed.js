import React from 'react';
import AddPostContainer from './../../shared/add-post/AddPostContainer';

import Posts from '../post/PostContainer';

const Feed = () => (
  <div className="feed-view">
    <AddPostContainer />
    <Posts type="date" />
  </div>
);

export default Feed;
