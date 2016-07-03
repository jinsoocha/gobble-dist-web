import React, { PropTypes } from 'react';
import PostTypeBarContainer from './PostTypeBarContainer';

import AddReview from './add-review/AddReview';

const AddPost = (props) => {
  let PostView;
  if (props.postType === 'review') {
    PostView = AddReview;
  } else if (props.postType === 'wish') {
    PostView = () => (
      <h1>Wish</h1>
    );
  } else if (props.postType === 'stream') {
    PostView = () => (
      <h1>Live Stream</h1>
    );
  } else { // default initalState is ''
    PostView = () => (
      <div className="add-post-instructions">
        <h2>What's gobbling?</h2>
        <p>Choose to add a review, make a wish, or live stream above.</p>
      </div>
    );
  }

  return (
    <div className="add-post">
      <PostTypeBarContainer />
      <div className="add-post-view">
        <PostView />
      </div>
    </div>
  );
};

AddPost.propTypes = {
  postType: PropTypes.string.isRequired
};

export default AddPost;
