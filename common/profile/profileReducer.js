const profileInitialState = {
  facebookId: '',
  firstName: '',
  lastName: '',
  displayName: '',
  photoUrl: ''
};

const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default profileReducer;
