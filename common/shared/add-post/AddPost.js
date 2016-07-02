import React, { PropTypes } from 'react';
import PostTypeBar from './PostTypeBar';

const AddPost = (props) => {
  let PostView;
  if (props.postType === 'wish') {
    PostView = (
      <h1>Wish</h1>
    );
  } else if (props.postType === 'review') {
    PostView = (
      <h1>Review</h1>
    );
  } else {
    PostView = (
      <h1>Something's wrong</h1>
    );
  }

  return (
    <div className="add-post">
      <PostTypeBar />
      <PostView />
    </div>
  );
};

AddPost.propTypes = {
  addPostView: PropTypes.string.isRequired
};

export default AddPost;
