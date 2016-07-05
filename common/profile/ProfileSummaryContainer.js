import { connect } from 'react-redux';
import ProfileSummary from './ProfileSummary';

const mapStateToProps = state => ({
  displayName: state.profile.displayName,
  isFollowing: state.profile.isFollowing,
  isHoveringFollowing: state.profile.isHoveringFollowing,
  isAuth: state.layout.isAuth
});

export default connect(mapStateToProps)(ProfileSummary);
