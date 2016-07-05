import fetch from 'isomorphic-fetch';

export const SHOW_UNFOLLOW_BUTTON = 'SHOW_UNFOLLOW_BUTTON';
export const HIDE_UNFOLLOW_BUTTON = 'HIDE_UNFOLLOW_BUTTON';

export const showUnfollowButton = () => ({
  type: SHOW_UNFOLLOW_BUTTON
});

export const hideUnfollowButton = () => ({
  type: HIDE_UNFOLLOW_BUTTON
});

export const SHOW_POST_FOLLOW = 'SHOW_POST_FOLLOW';
const showPostFollow = () => ({
  type: SHOW_POST_FOLLOW
});

export const postFollow = (followerId, followedId) => {
  return dispatch => {
    console.log(followerId, followedId);
    return dispatch(showPostFollow());
  };
};

export const SHOW_DELETE_FOLLOW = 'SHOW_DELETE_FOLLOW';
const showDeleteFollow = () => ({
  type: SHOW_DELETE_FOLLOW
});

export const deleteFollow = (followerId, followedId) => {
  return dispatch => {
    console.log(followerId, followedId);
    return dispatch(showDeleteFollow());
  };
};
