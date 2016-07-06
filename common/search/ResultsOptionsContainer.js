import { connect } from 'react-redux';
import ResultsOptions from './ResultsOptions';
import { changeResultsView } from './ResultsActions';

const mapDispatchToProps = dispatch => ({
  changeResultsView: view => {
    dispatch(changeResultsView(view));
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(ResultsOptions);
