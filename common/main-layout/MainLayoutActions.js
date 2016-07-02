export const UPDATE_SEARCH_BAR_QUERY = 'UPDATE_SEARCH_BAR_QUERY';

export function updateSearchBarQuery(searchBarQuery) {
  return {
    type: UPDATE_SEARCH_BAR_QUERY,
    searchBarQuery
  };
}

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal() {
  return {
    type: OPEN_MODAL,
    navBarAuth: {
      modalIsOpen: true
    }
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
    navBarAuth: {
      modalIsOpen: false
    }
  };
}

