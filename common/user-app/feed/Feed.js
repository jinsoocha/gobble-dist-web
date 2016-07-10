import React from 'react';
import AddPostContainer from './../../shared/add-post/AddPostContainer';

import Posts from '../../shared/post/PostContainer';

const Feed = () => (
  <div className="feed-view">
    <AddPostContainer />
    <Posts type="friends" />
  </div>
);

export default Feed;
