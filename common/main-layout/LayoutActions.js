import fetch from 'isomorphic-fetch';

export const SET_USER_IS_AUTH = 'SET_USER_IS_AUTH';

const setUserIsAuth = userIsAuth => {
  return {
    type: SET_USER_IS_AUTH,
    userIsAuth
  };
};

export const fetchUserIsAuth = () => {
  return dispatch => {
    return fetch('/is-auth')
      .then(response => response.json())
      .then(json => dispatch(setUserIsAuth(json)));
  };
};
