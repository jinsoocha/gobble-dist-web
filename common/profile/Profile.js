import React, { PropTypes } from 'react';
import MainLayoutContainer from './../main-layout/MainLayoutContainer';
import ProfileSumamryContainer from './ProfileSummaryContainer';

const Profile = (props) => (
  <MainLayoutContainer>
    <div className="profile-layout">
      <img className="profile-photo" src={props.photoUrl} alt="Profile" />
      <ProfileSumamryContainer />
    </div>
  </MainLayoutContainer>
);

Profile.propTypes = {
  photoUrl: PropTypes.string.isRequired
};

export default Profile;
