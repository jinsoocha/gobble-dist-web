import fetch from 'isomorphic-fetch';
import { GOBBLE_API_URL } from '../../../env/client';

export function getMedia(postId) {
  return dispatch => {
    fetch(`${GOBBLE_API_URL}/media?post_id=${postId}`)
      .then(res => res.json())
      .then(media => dispatch({ type: 'UPDATE_MEDIA', postId, media }))
      .catch(err => console.log(err));
  };
}
