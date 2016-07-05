import {
  SHOW_UNFOLLOW_BUTTON,
  HIDE_UNFOLLOW_BUTTON,
  SHOW_POST_FOLLOW
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
    case SHOW_POST_FOLLOW:
      return Object.assign({}, state, {
        isFollowing: true
      });
    default:
      return state;
  }
};

export default profileReducer;
