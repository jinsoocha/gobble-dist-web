import {
  UPDATE_SEARCH_BAR_QUERY,
  OPEN_MODAL,
  CLOSE_MODAL
} from './MainLayoutActions';

const mainLayoutInitialState = {
  searchBarQuery: '',
  isAuth: false,
  navBarUser: {
    facebookId: '',
    firstName: '',
    photoUrl: ''
  },
  modalIsOpen: false
};

const mainLayoutReducer = (state = mainLayoutInitialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_BAR_QUERY:
      return Object.assign({}, state, {
        searchBarQuery: action.searchBarQuery
      });
    case OPEN_MODAL:
      return Object.assign({}, state, {
        modalIsOpen: action.modalIsOpen
      });
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        modalIsOpen: action.modalIsOpen
      });
    default:
      return state;
  }
};

export default mainLayoutReducer;
