import {

} from './LiveActions';

const liveInitialState = {
  incomingPeerId: '',
  currentlyWatching: 'N/A',
  description: 'Find active live streams below.',
  duration: 'N/A',
  started: 'N/A',
  liveAll: [],
  liveList: []
};

const liveReducer = (state = liveInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default liveReducer;
