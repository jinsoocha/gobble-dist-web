export const UPDATE_SEARCH_BAR_QUERY = 'UPDATE_SEARCH_BAR_QUERY';

export const updateSearchBarQuery = (searchBarQuery) => {
  return {
    type: UPDATE_SEARCH_BAR_QUERY,
    searchBarQuery
  };
};

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = () => {
  return {
    type: OPEN_MODAL,
    modalIsOpen: true
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
    modalIsOpen: false
  };
};
