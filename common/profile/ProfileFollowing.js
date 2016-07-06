import React, { PropTypes } from 'react';
import UserBlock from './UserBlock';

const ProfileFollowing = (props) => {
  if (props.following.length === 0) {
    return (
      <h3 className="profile-no-following">
        {props.firstName} is not following any users.
        <i className="fa fa-frown-o" aria-hidden="true"></i>
      </h3>
    );
  } else {
    return (
      <div className="profile-following-view">
        {props.following.map(user =>
          <UserBlock
            key={user.facebook_id}
            user={user}
          />
        )}
      </div>
    );
  }
};

ProfileFollowing.propTypes = {
  firstName: PropTypes.string.isRequired,
  following: PropTypes.array.isRequired
};

export default ProfileFollowing;
