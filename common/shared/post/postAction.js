const fetch = require('isomorphic-fetch');
const GOBBLE_API_URL = require('../../../env/client').GOBBLE_API_URL;

const GET_POSTS_BY_DATE = 'GET_POSTS_BY_DATE';
const GET_POSTS_BY_FRIENDS = 'GET_POSTS_BY_FRIENDS';

export function getPostsByDate(date) {
  let date2 = date;
  if (date2) {
    date2 = `?date=${date2}`;
  } else {
    date2 = '';
  }
  return dispatch => {
    fetch(`${GOBBLE_API_URL}/post/date${date2}`)
      .then(res => res.json())
      .then(posts => {
        dispatch({ type: GET_POSTS_BY_DATE, posts });
      })
      .catch(err => console.log(`Error in getPostsByDate: ${err}`));
  };
}

export function getPostsByFriends(userId, date) {
  let date2 = date;
  if (date2) {
    date2 = `&date=${date2}`;
  } else {
    date2 = '';
  }

  return dispatch => {
    fetch(`${GOBBLE_API_URL}/post/friends?facebookId=${userId}${date2}`)
      .then(res => res.json())
      .then(posts => {
        console.log(posts);
        dispatch({ type: GET_POSTS_BY_FRIENDS, posts });
      })
      .catch(err => console.log(`Error in getPostsByFriends: ${err}`));
  };
}
