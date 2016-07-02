import { connect } from 'react-redux';

import NavBarAuth from './NavBarAuth';

const mapStateToProps = state => ({
  facebookId: state.layout.navBarUser.facebookId.toString(),
  firstName: state.layout.navBarUser.firstName,
  photoUrl: state.layout.navBarUser.photoUrl,
  modalIsOpen: state.layout.navBarUser.modalIsOpen
});

export default connect(mapStateToProps)(NavBarAuth);
