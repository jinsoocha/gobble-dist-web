import {
  RESET_INCOMING_STREAM
} from './LiveActions';

const liveInitialState = {
  incomingPeerId: '',
  currentlyWatching: 'N/A',
  description: 'Find active live streams below.',
  startTime: 'N/A',
  liveAll: [],
  liveList: []
};

const liveReducer = (state = liveInitialState, action) => {
  switch (action.type) {
    case RESET_INCOMING_STREAM:
      return Object.assign({}, state, {
        incomingPeerId: '',
        currentlyWatching: 'N/A',
        description: 'Find active live streams below.',
        startTime: 'N/A'
      });
    default:
      return state;
  }
};

export default liveReducer;
