import {
  RESET_INCOMING_STREAM,
  CHANGE_LIVE_OPTIONS_VIEW
} from './LiveActions';

const liveInitialState = {
  incomingPeerId: '',
  currentlyWatching: 'N/A',
  description: 'Find active live streams below.',
  startTime: 'N/A',
  view: 'all',
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
    case CHANGE_LIVE_OPTIONS_VIEW:
      return Object.assign({}, state, {
        view: action.view
      });
    default:
      return state;
  }
};

export default liveReducer;
