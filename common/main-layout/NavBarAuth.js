import React, { PropTypes } from 'react';
import SearchBarContainer from './SearchBarContainer';
import Modal from 'react-modal';
import AddPost from './../shared/add-post/AddPost';

const NavBarAuth = (props) => {
  const { facebookId, firstName, photoUrl, modalIsOpen, openModal, closeModal } = props;
  return (
    <div className="navbar-auth navbar-wrapper">
      <div className="navbar-menu pure-menu pure-menu-horizontal">
        <a href="/" className="navbar-menu-heading pure-menu-heading">LOGO</a>
        <SearchBarContainer />
        <ul className="navbar-menu-list pure-menu-list">
          <li className="pure-menu-item">
            <a href={`/${facebookId}`} className="navbar-menu-link pure-menu-link">
              <img className="navbar-profile-photo" src={photoUrl} alt="Facebook Profile" />
              {firstName}
            </a>
          </li>
          <li className="pure-menu-item"><a href="/" className="navbar-menu-link pure-menu-link">Home</a></li>
          <li className="pure-menu-item">
            <span className="gobble-modal-link navbar-menu-link pure-menu-link" onClick={openModal}>
              <i className="gobble-modal-link-icon fa fa-cutlery" aria-hidden="true" />
              Gobble
              <Modal
                className="add-post-modal"
                overlayClassName="add-post-modal-overlay"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
              >
                <AddPost />
              </Modal>
            </span>
          </li>
          <li className="navbar-dropdown pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <div className="pure-menu-link"><i className="fa fa-cog" aria-hidden="true" /></div>
            <ul className="pure-menu-children">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link dropdown-link">Settings</a></li>
              <li className="pure-menu-item"><a href="/logout" className="pure-menu-link dropdown-link">Sign out</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

NavBarAuth.propTypes = {
  facebookId: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default NavBarAuth;
