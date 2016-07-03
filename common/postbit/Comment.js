import React, { PropTypes } from 'react';

const Comment = props => (
  <div className="comment">{props.comment}</div>
);

Comment.propTypes = {
  comment: PropTypes.string.isRequired
};

export default Comment;
