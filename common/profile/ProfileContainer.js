import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = state => ({
  photoUrl: state.profile.photoUrl,
  view: state.profile.view
});

export default connect(mapStateToProps)(Profile);
