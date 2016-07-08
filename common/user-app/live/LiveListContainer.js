import { connect } from 'react-redux';
import LiveList from './LiveList';

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

export default connect(
  mapStateToProps
)(LiveList);
