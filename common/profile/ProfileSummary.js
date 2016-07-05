import React, { PropTypes } from 'react';

const IsNotAuthButton = () => (
  <div>
    <span
      className="is-not-auth-button"
      onClick={() => { window.location = '/login'; }}
    >
      Sign in to follow
    </span>
  </div>
);

const IsFollowingButton = () => (
  <div>
    <span className="is-following-button">Following</span>
  </div>
);

const HoverIsFollowingButton = () => (
  <div>
    <span className="hover-is-following-button">Unfollow</span>
  </div>
);

const IsNotFollowingButton = () => (
  <div>
    <span className="is-not-following-button">Follow</span>
  </div>
);

const ProfileSummary = (props) => {
  const { displayName, isAuth, isFollowing, isHoveringFollowing } = props;
  let Button;
  if (!isAuth) {
    Button = IsNotAuthButton;
  } else {
    if (isFollowing) {
      if (isHoveringFollowing) {
        Button = HoverIsFollowingButton;
      } else {
        Button = IsFollowingButton;
      }
    } else {
      Button = IsNotFollowingButton;
    }
  }

  return (
    <div className="profile-summary">
      <h1 className="profile-user-name">{displayName}</h1>
      <Button />
    </div>
  );
};

ProfileSummary.propTypes = {
  displayName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  isHoveringFollowing: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired
};

export default ProfileSummary;
