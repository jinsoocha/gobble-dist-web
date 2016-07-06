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
      <div className="profile-followers-view pure-g">
        {props.followers.map(user =>
          <UserBlock
            key={user.facebook_id}
            user={user}
          />
        )}
      </div>
    );
  }
};

ProfileFollowers.propTypes = {
  firstName: PropTypes.string.isRequired,
  followers: PropTypes.array.isRequired
};

export default ProfileFollowers;
