import fetch from 'isomorphic-fetch';
import { GOBBLE_API_URL } from './../../env/client';
import deepEqual from 'deep-equal';

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
    const newFollow = {
      follower: followerId,
      followed: followedId,
    };

    return fetch(`${GOBBLE_API_URL}/follow`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFollow)
    }).then(res => res.json())
      .then(followData => {
        if (deepEqual(newFollow, followData)) {
          return dispatch(showPostFollow());
        }
      });
  };
};

export const SHOW_DELETE_FOLLOW = 'SHOW_DELETE_FOLLOW';

const showDeleteFollow = () => ({
  type: SHOW_DELETE_FOLLOW
});

export const deleteFollow = (followerId, followedId) => {
  return dispatch => {
    const deletedFollow = {
      follower: followerId,
      followed: followedId,
    };

    return fetch(`${GOBBLE_API_URL}/follow`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deletedFollow)
    }).then(res => {
      if (res.status === 204) {
        return dispatch(showDeleteFollow());
      }
    });
  };
};
