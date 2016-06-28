import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import { updateSearchBarQuery } from './MainLayoutActions';

const mapStateToProps = state => ({
  searchBarQuery: state.layout.searchBarQuery
});

const mapDispatchToProps = dispatch => ({
  updateSearchBarQuery: (searchBarQuery) => {
    dispatch(updateSearchBarQuery(searchBarQuery));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
