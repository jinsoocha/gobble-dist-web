const fetch = require('isomorphic-fetch');
const GOBBLE_API_URL = require('../../../env/client');

const UPDATE_COMMENT = 'UPDATE_COMMENT';

export function getComments(parentId) {
  return dispatch => {
    fetch(`${GOBBLE_API_URL}/post/parent?parentId=${parentId}`)
      .then(comments => dispatch({ type: UPDATE_COMMENT, parentId, comments }));
  };
}
