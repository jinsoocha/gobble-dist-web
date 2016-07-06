import React, { PropTypes } from 'react';

export const IsNotAuthButton = () => (
  <div>
    <span
      className="is-not-auth-button"
      onClick={() => { window.location = '/login'; }}
    >
      Sign in to follow
    </span>
  </div>
);

export const IsFollowingButton = (props) => (
  <div>
    <span
      className="is-following-button"
      onMouseEnter={props.showUnfollowButton}
    >
      Following
    </span>
  </div>
);

IsFollowingButton.propTypes = {
  showUnfollowButton: PropTypes.func.isRequired
};

export const UnfollowButton = (props) => {
  const { hideUnfollowButton, deleteFollow, followerId, followedId } = props;
  return (
    <div>
      <span
        className="unfollow-button"
        onMouseLeave={hideUnfollowButton}
        onClick={deleteFollow.bind(null, followerId, followedId)}
      >
        Unfollow
      </span>
    </div>
  );
};

UnfollowButton.propTypes = {
  hideUnfollowButton: PropTypes.func.isRequired,
  deleteFollow: PropTypes.func.isRequired,
  followerId: PropTypes.string.isRequired,
  followedId: PropTypes.string.isRequired
};

export const FollowButton = (props) => {
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

FollowButton.propTypes = {
  postFollow: PropTypes.func.isRequired,
  followerId: PropTypes.string.isRequired,
  followedId: PropTypes.string.isRequired
};

