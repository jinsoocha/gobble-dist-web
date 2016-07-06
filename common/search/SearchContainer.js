import { connect } from 'react-redux';
import Search from './Search';

const mapStateToProps = state => ({
  query: state.search.query,
  isLoading: state.search.isLoading,
  view: 'all'
});

export default connect(mapStateToProps)(Search);
