import { connect } from 'react-redux';
import Search from './Search';
import { fetchSearchResults } from './SearchActions';

const mapStateToProps = state => ({
  query: state.search.query,
  isLoading: state.search.isLoading,
  view: 'all'
});

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: (query) => {
    dispatch(fetchSearchResults(query));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
