import { connect } from 'react-redux';
import LiveOptions from './LiveOptions';

import { changeLiveOptionsView } from './LiveActions';

const mapStateToProps = state => ({
  view: state.live.view
});

const mapDispatchToProps = dispatch => ({
  changeLiveOptionsView: view => {
    dispatch(changeLiveOptionsView(view));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveOptions);
