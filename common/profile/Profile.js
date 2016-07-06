import React, { PropTypes } from 'react';
import MainLayoutContainer from './../main-layout/MainLayoutContainer';
import ProfileSummaryContainer from './ProfileSummaryContainer';

import ProfilePosts from './ProfilePosts';
import ProfileFollowingContainer from './ProfileFollowingContainer';
import ProfileFollowersContainer from './ProfileFollowersContainer';

const Profile = (props) => {
  const { photoUrl, view } = props;

  let ProfileView;
  if (view === 'following') {
    ProfileView = ProfileFollowingContainer;
  } else if (view === 'followers') {
    ProfileView = ProfileFollowersContainer;
  } else { // view === 'posts'
    ProfileView = ProfilePosts;
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
