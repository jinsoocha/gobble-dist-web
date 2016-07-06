import { connect } from 'react-redux';
import ProfileViewOptions from './ProfileViewOptions';
import { changeProfileView } from './ProfileActions';

const mapStateToProps = state => ({
  numPosts: state.profile.posts.length,
  numFollowing: state.profile.following.length,
  numFollowers: state.profile.followers.length
});

const mapDispatchToProps = dispatch => ({
  changeProfileView: view => {
    dispatch(changeProfileView(view));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileViewOptions);
