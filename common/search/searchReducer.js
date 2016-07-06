import {
  RECEIVE_SEARCH_RESULTS
} from './SearchActions';

const searchInitialState = {
  query: '',
  isLoading: true,
  results: {
    users: [],
    products: [],
    reviews: []
  },
  view: 'all'
};

const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, state, {
        isLoading: false,
        results: {
          users: action.users,
          products: action.products,
          reviews: action.reviews
        }
      });
    default:
      return state;
  }
};

export default searchReducer;
