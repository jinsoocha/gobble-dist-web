import { connect } from 'react-redux';
import ProfileFollowers from './ProfileFollowers';

const mapStateToProps = state => ({
  firstName: state.profile.firstName,
  followers: state.profile.followers
});

export default connect(
  mapStateToProps
)(ProfileFollowers);
