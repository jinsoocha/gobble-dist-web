import connect from 'react-redux';
import NavBarAuth from './NavBarAuth';

const mapStateToProps = state => ({
  facebookId: state.layout.navBarAuth.facebook_id,
  firstName: state.layout.navBarAuth.firstName,
  photoUrl: state.layout.navBarAuth.photo_url
});

export default connect(mapStateToProps)(NavBarAuth);
