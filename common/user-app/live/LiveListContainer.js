import { connect } from 'react-redux';
import LiveList from './LiveList';

const applyFilter = (liveList, filter) => {
  return liveList;
};

const mapStateToProps = state => ({
  filteredLiveList: applyFilter(state.live.liveList, state.live.liveListFilter)
});

export default connect(
  mapStateToProps
)(LiveList);
