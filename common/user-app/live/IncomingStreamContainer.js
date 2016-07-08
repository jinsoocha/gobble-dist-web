import { connect } from 'react-redux';
import IncomingStream from './IncomingStream';

import { resetIncomingStream } from './LiveActions';

const mapStateToProps = state => ({
  incomingPeerId: state.live.incomingPeerId,
  currentlyWatching: state.live.currentlyWatching,
  description: state.live.description,
  startTime: state.live.startTime
});

const mapDispatchToProps = dispatch => ({
  resetIncomingStream: () => {
    dispatch(resetIncomingStream());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomingStream);
