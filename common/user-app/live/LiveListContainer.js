import { connect } from 'react-redux';
import LiveList from './LiveList';

import { connectIncomingStream } from './LiveActions';

const applyFilter = (liveList, filter) => {
  switch (filter) {
    case 'all':
      return liveList;
    case 'active':
      return liveList.filter(live => !!live.active);
    case 'ended':
      return liveList.filter(live => !!!live.active);
    default:
      return liveList;
  }
};

const mapStateToProps = state => ({
  filteredLiveList: applyFilter(state.live.liveList, state.live.liveListFilter)
});

const mapDispatchToProps = dispatch => ({
  connectIncomingStream: live => {
    dispatch(connectIncomingStream(live));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveList);
