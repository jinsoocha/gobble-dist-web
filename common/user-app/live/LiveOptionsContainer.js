import { connect } from 'react-redux';
import LiveOptions from './LiveOptions';

import { changeLiveOptionsView, changeLiveListFilter } from './LiveActions';

const mapDispatchToProps = dispatch => ({
  changeLiveOptionsView: view => {
    dispatch(changeLiveOptionsView(view));
  },
  changeLiveListFilter: filter => {
    dispatch(changeLiveListFilter(filter));
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(LiveOptions);
