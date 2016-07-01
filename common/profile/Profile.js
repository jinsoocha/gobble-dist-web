import React, { PropTypes } from 'react';
import MainLayoutContainer from './../main-layout/MainLayoutContainer';

const Profile = (props) => (
  <MainLayoutContainer>
    <div className="profile-layout">
      <h1 className="profile-user-name">{props.displayName}</h1>
      <img className="profile-photo" src={props.photoUrl} alt="Profile" />
    </div>
  </MainLayoutContainer>
);

Profile.propTypes = {
  facebookId: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
};

export default Profile;
