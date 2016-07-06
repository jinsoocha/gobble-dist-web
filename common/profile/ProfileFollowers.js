import React, { PropTypes } from 'react';
import UserBlock from './UserBlock';

const ProfileFollowers = (props) => {
  if (props.followers.length === 0) {
    return (
      <h3 className="profile-no-followers">
        {props.firstName} has no followers.
        <i className="fa fa-frown-o" aria-hidden="true"></i>
      </h3>
    );
  } else {
    return (
      <div>followers</div>
    );
  }
};

ProfileFollowers.propTypes = {
  firstName: PropTypes.string.isRequired,
  followers: PropTypes.array.isRequired
};

export default ProfileFollowers;
