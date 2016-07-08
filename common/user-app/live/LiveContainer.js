import { connect } from 'react-redux';
import Live from './Live';

import { changeLiveListFilter } from './LiveActions';

const mapStateToProps = state => ({
  view: state.live.view
});

const mapDispatchToProps = dispatch => ({
  changeLiveListFilter: filter => {
    dispatch(changeLiveListFilter(filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Live);
