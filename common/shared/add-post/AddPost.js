import React, { PropTypes } from 'react';
import PostTypeBarContainer from './PostTypeBarContainer';

const AddPost = (props) => {
  let PostView;
  if (props.postType === 'review') {
    PostView = () => (
      <h1>Review</h1>
    );
  } else if (props.postType === 'wish') {
    PostView = () => (
      <h1>Wish</h1>
    );
  } else if (props.postType === 'stream') {
    PostView = () => (
      <h1>Live Stream</h1>
    );
  } else {
    PostView = () => (
      <h1>Something's wrong</h1>
    );
  }

  return (
    <div className="add-post">
      <PostTypeBarContainer />
      <PostView />
    </div>
  );
};

AddPost.propTypes = {
  postType: PropTypes.string.isRequired
};

export default AddPost;
