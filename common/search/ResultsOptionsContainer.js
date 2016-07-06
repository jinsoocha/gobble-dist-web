import { connect } from 'react-redux';
import ResultsOptions from './ResultsOptions';
import { changeResultsView } from './SearchActions';

const mapStateToProps = state => ({
  numUsers: state.search.results.users.length,
  numProducts: state.search.results.products.length,
  numReviews: state.search.results.reviews.length,
});

const mapDispatchToProps = dispatch => ({
  changeResultsView: view => {
    dispatch(changeResultsView(view));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsOptions);
