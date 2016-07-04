import React, { PropTypes } from 'react';

import Rating from './Rating';

const PostContent = props => (
  <div className="post-content">
    <Rating rating={props.rating} />

  </div>

);

PostContent.propTypes = {
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};

export default PostContent;
