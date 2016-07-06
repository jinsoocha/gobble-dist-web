import React, { PropTypes } from 'react';
import ProfileViewOptionsContainer from './ProfileViewOptionsContainer';
import {
  IsNotAuthButton,
  UnfollowButton,
  IsFollowingButton,
  FollowButton
} from './ProfileFollowButtons';

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
            deleteFollow={props.deleteFollow}
            followerId={props.followerId}
            followedId={props.followedId}
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
      <ProfileViewOptionsContainer />
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
  postFollow: PropTypes.func.isRequired,
  deleteFollow: PropTypes.func.isRequired
};

export default ProfileSummary;
