const profileInitialState = {
  facebookId: '',
  firstName: '',
  lastName: '',
  displayName: '',
  photoUrl: '',
  userIsFollowing: false,
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
