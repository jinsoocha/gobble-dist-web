import React, { PropTypes } from 'react';

const Content = props => (
  <div className="comment-content">{props.comment}</div>
);

Content.propTypes = {
  comment: PropTypes.string.isRequired
};

export default Content;
