import React, { PropTypes } from 'react';

const UserBlock = (props) => {
  return (
    <div className="user-block pure-u-1-3">
      <a href={`/${props.user.facebook_id}`}>
        <img alt="user" className="user-block-image" src={props.user.photo_url} />
      </a>
      <div className="user-block-name">
        <a href={`/${props.user.facebook_id}`}>{props.user.display_name}</a>
      </div>
    </div>
  );
};

UserBlock.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserBlock;
