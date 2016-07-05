import { connect } from 'react-redux';
import ProfileSummary from './ProfileSummary';

import {
  showUnfollowButton,
  hideUnfollowButton,
  postFollow
} from './ProfileActions';

const mapStateToProps = state => ({
  followerId: state.layout.navBarUser.facebookId.toString(),
  followedId: state.profile.facebookId.toString(),
  displayName: state.profile.displayName,
  isFollowing: state.profile.isFollowing,
  isShowingUnfollowButton: state.profile.isShowingUnfollowButton,
  isAuth: state.layout.isAuth
});

const mapDispatchToProps = dispatch => ({
  showUnfollowButton: () => {
    dispatch(showUnfollowButton());
  },
  hideUnfollowButton: () => {
    dispatch(hideUnfollowButton());
  },
  postFollow: (followerId, followedId) => {
    dispatch(postFollow(followerId, followedId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileSummary);
