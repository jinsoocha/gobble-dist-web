import React, { PropTypes } from 'react';
import MainLayoutContainer from './../main-layout/MainLayoutContainer';
import ProfileSummaryContainer from './ProfileSummaryContainer';

import ProfileFeed from './ProfileFeed';
import ProfileFollowing from './ProfileFollowing';
import ProfileFollowers from './ProfileFollowers';

const Profile = (props) => {
  const { photoUrl, view } = props;

  let ProfileView;
  if (view === 'following') {
    ProfileView = ProfileFollowing;
  } else if (view === 'followers') {
    ProfileView = ProfileFollowers;
  } else { // view === 'feed'
    ProfileView = ProfileFeed;
  }

  return (
    <MainLayoutContainer>
      <div className="profile-layout">
        <img className="profile-photo" src={photoUrl} alt="Profile" />
        <ProfileSummaryContainer />
        <ProfileView />
      </div>
    </MainLayoutContainer>
  );
};

Profile.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired
};

export default Profile;
