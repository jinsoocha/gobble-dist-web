import { connect } from 'react-redux';

import NavBarAuth from './NavBarAuth';
import { openModal, closeModal } from './MainLayoutActions';

const mapStateToProps = state => ({
  facebookId: state.layout.navBarUser.facebookId.toString(),
  firstName: state.layout.navBarUser.firstName,
  photoUrl: state.layout.navBarUser.photoUrl,
  modalIsOpen: state.layout.modalIsOpen
});

const mapDispatchToProps = dispatch => ({
  openModal: () => {
    dispatch(openModal());
  },
  closeModal: () => {
    dispatch(closeModal());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarAuth);
