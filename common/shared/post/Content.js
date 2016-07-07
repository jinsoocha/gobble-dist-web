import React, { PropTypes } from 'react';

const Comment = props => (
  <div className="review-comment pure-u-3-5">{props.comment}</div>
);

Comment.propTypes = {
  comment: PropTypes.string
};

export default Comment;
