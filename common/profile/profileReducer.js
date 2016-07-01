const profileInitialState = {
  facebookId: '',
  firstName: '',
  lastName: '',
  photoUrl: ''
};

const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default profileReducer;
