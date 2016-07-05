import React, { PropTypes } from 'react';

import Username from '../general/Username';
import Content from './Content';

const Comment = props => (
  <div className="comment">
    <Username facebook_id={props.facebook_id} first_name={props.first_name} last_name={props.last_name} />
    <Content comment={props.comment} />
  </div>
);

Comment.propTypes = {
  facebook_id: PropTypes.number,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  display_name: PropTypes.string,
  photo_url: PropTypes.string,
  comment: PropTypes.string
};

export default Comment;
