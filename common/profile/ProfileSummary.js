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

const IsFollowingButton = (props) => (
  <div>
    <span
      className="is-following-button"
      onMouseOver={props.showUnfollowButton}
    >
      Following
    </span>
  </div>
);

const UnfollowButton = (props) => (
  <div>
    <span
      className="unfollow-button"
      onMouseOut={props.hideUnfollowButton}
    >
      Unfollow
    </span>
  </div>
);

const FollowButton = (props) => {
  const { postFollow, followerId, followedId } = props;
  return (
    <div>
      <span
        className="follow-button"
        onClick={postFollow.bind(null, followerId, followedId)}
      >
        <i className="fa fa-user" aria-hidden="true" />
        <i className="fa fa-plus fa-sm" aria-hidden="true" />
        Follow
      </span>
    </div>
  );
};

const ProfileSummary = (props) => {
  let Button;
  if (!props.isAuth) {
    Button = IsNotAuthButton;
  } else {
    if (props.isFollowing) {
      if (props.isShowingUnfollowButton) {
        Button = () => (
          <UnfollowButton
            hideUnfollowButton={props.hideUnfollowButton}
          />
        );
      } else {
        Button = () => (
          <IsFollowingButton
            showUnfollowButton={props.showUnfollowButton}
          />
        );
      }
    } else {
      Button = () => (
        <FollowButton
          postFollow={props.postFollow}
          followerId={props.followerId}
          followedId={props.followedId}
        />
      );
    }
  }

  return (
    <div className="profile-summary">
      <h1 className="profile-user-name">{props.displayName}</h1>
      <Button />
    </div>
  );
};

ProfileSummary.propTypes = {
  followerId: PropTypes.string.isRequired,
  followedId: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  isShowingUnfollowButton: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  showUnfollowButton: PropTypes.func.isRequired,
  hideUnfollowButton: PropTypes.func.isRequired,
  postFollow: PropTypes.func.isRequired
};

export default ProfileSummary;
