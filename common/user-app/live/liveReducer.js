import {
  RESET_INCOMING_STREAM,
  CHANGE_LIVE_OPTIONS_VIEW,
  CHANGE_LIVE_LIST_FILTER,
  CONNECT_INCOMING_STREAM
} from './LiveActions';

const liveInitialState = {
  incomingPeerId: '',
  currentlyWatching: {},
  description: 'Find active live streams below.',
  startTime: 'N/A',
  view: 'all',
  liveAll: [],
  liveList: [],
  liveListFilter: 'all'
};

const liveReducer = (state = liveInitialState, action) => {
  switch (action.type) {
    case RESET_INCOMING_STREAM:
      return Object.assign({}, state, {
        incomingPeerId: '',
        currentlyWatching: {},
        description: 'Find active live streams below.',
        startTime: 'N/A'
      });
    case CHANGE_LIVE_OPTIONS_VIEW:
      return Object.assign({}, state, {
        view: action.view
      });
    case CHANGE_LIVE_LIST_FILTER:
      return Object.assign({}, state, {
        liveListFilter: action.filter
      });
    case CONNECT_INCOMING_STREAM:
      return Object.assign({}, state, {
        incomingPeerId: action.incomingPeerId,
        currentlyWatching: action.currentlyWatching,
        description: action.description,
        startTime: action.startTime
      });
    default:
      return state;
  }
};

export default liveReducer;
