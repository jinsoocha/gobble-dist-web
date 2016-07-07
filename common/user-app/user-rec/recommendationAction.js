import fetch from 'isomorphic-fetch';
import { GOBBLE_API_URL } from '../../../env/client';

export function getRecs(facebookId) {
  return dispatch => {
    fetch(`${GOBBLE_API_URL}/rec?facebookId=${facebookId}`)
      .then(res => res.json())
      .then(res => dispatch({ type: 'GET_RECS', recs: res }))
      .catch(err => console.log(err));
  }
}
