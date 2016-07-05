import {
  SHOW_UNFOLLOW_BUTTON,
  HIDE_UNFOLLOW_BUTTON
} from './ProfileActions';

const profileInitialState = {
  facebookId: '',
  firstName: '',
  lastName: '',
  displayName: '',
  photoUrl: '',
  isFollowing: false,
  isShowingUnfollowButton: false,
  following: [],
  followers: []
};

const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    case SHOW_UNFOLLOW_BUTTON:
      return Object.assign({}, state, {
        isShowingUnfollowButton: true
      });
    case HIDE_UNFOLLOW_BUTTON:
      return Object.assign({}, state, {
        isShowingUnfollowButton: false
      });
    default:
      return state;
  }
};

export default profileReducer;
