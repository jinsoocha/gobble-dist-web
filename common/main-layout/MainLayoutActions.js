export const UPDATE_SEARCH_BAR_QUERY = 'UPDATE_SEARCH_BAR_QUERY';

export function updateSearchBarQuery(searchBarQuery) {
  return {
    type: UPDATE_SEARCH_BAR_QUERY,
    searchBarQuery
  };
}
