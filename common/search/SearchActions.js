import fetch from 'isomorphic-fetch';
import { GOBBLE_API_URL } from './../../env/client';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const receiveSearchResults = searchResults => ({
  type: RECEIVE_SEARCH_RESULTS,
  users: searchResults.users,
  products: searchResults.products,
  reviews: searchResults.reviews
});

export const fetchSearchResults = query => {
  return dispatch => {
    return fetch(`${GOBBLE_API_URL}/search/?q=${query}`)
      .then(res => res.json())
      .then(searchResults => {
        // console.log(searchResults);
        dispatch(receiveSearchResults(searchResults));
      });
  };
};
