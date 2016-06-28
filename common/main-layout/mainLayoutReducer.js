import { UPDATE_SEARCH_BAR_QUERY } from './MainLayoutActions';

const mainLayoutInitialState = {
  searchBarQuery: '',
  isAuth: ''
};

const mainLayoutReducer = (state = mainLayoutInitialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_BAR_QUERY:
      return Object.assign({}, state, {
        searchBarQuery: action.searchBarQuery
      });
    default:
      return state;
  }
};

export default mainLayoutReducer;
