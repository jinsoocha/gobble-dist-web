import {
  RECEIVE_SEARCH_RESULTS,
  CHANGE_RESULTS_VIEW
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
    case CHANGE_RESULTS_VIEW:
      return Object.assign({}, state, {
        view: action.view
      });
    default:
      return state;
  }
};

export default searchReducer;
