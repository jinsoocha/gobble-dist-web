import { connect } from 'react-redux';
import Search from './Search';

const mapStateToProps = state => ({
  query: state.search.resultsQuery
});

export default connect(mapStateToProps)(Search);
