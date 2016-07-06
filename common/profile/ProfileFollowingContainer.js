import { connect } from 'react-redux';
import ProfileFollowing from './ProfileFollowing';

const mapStateToProps = state => ({
  firstName: state.profile.firstName,
  following: state.profile.following
});

export default connect(
  mapStateToProps
)(ProfileFollowing);
