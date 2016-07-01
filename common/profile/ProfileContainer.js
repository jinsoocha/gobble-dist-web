import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = state => ({
  facebookId: state.profile.facebookId.toString(),
  firstName: state.profile.firstName,
  lastName: state.profile.lastName,
  displayName: state.profile.displayName,
  photoUrl: state.profile.photoUrl
});

export default connect(mapStateToProps)(Profile);
