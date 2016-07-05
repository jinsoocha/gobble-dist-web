const profileInitialState = {
  facebookId: '',
  firstName: '',
  lastName: '',
  displayName: '',
  photoUrl: '',
  isFollowing: false,
  isHoveringFollowing: false,
  following: [],
  followers: []
};

const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default profileReducer;
