import { connect } from 'react-redux';

import NavBarAuth from './NavBarAuth';

const mapStateToProps = state => ({
  facebookId: state.layout.navBarUser.facebookId.toString(),
  firstName: state.layout.navBarUser.firstName,
  photoUrl: state.layout.navBarUser.photoUrl
});

export default connect(mapStateToProps)(NavBarAuth);
