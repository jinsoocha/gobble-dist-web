import React, { PropTypes } from 'react';
import MainLayoutContainer from './../main-layout/MainLayoutContainer';
import ProfileSummaryContainer from './ProfileSummaryContainer';

const Profile = (props) => {
  const { photoUrl, view } = props;
  return (
    <MainLayoutContainer>
      <div className="profile-layout">
        <img className="profile-photo" src={photoUrl} alt="Profile" />
        <ProfileSummaryContainer />
      </div>
    </MainLayoutContainer>
  );
};

Profile.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired
};

export default Profile;
