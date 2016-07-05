import { connect } from 'react-redux';
import ProfileSummary from './ProfileSummary';

import { showUnfollowButton, hideUnfollowButton } from './ProfileActions';

const mapStateToProps = state => ({
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileSummary);
