export const RESET_INCOMING_STREAM = 'RESET_INCOMING_STREAM';
export const resetIncomingStream = () => ({
  type: RESET_INCOMING_STREAM
});

export const CHANGE_LIVE_OPTIONS_VIEW = 'CHANGE_LIVE_OPTIONS_VIEW';
export const changeLiveOptionsView = view => ({
  type: CHANGE_LIVE_OPTIONS_VIEW,
  view
});

export const CHANGE_LIVE_LIST_FILTER = 'CHANGE_LIVE_LIST_FILTER';
export const changeLiveListFilter = filter => ({
  type: CHANGE_LIVE_LIST_FILTER,
  filter
});

export const CONNECT_INCOMING_STREAM = 'CONNECT_INCOMING_STREAM';
export const connectIncomingStream = live => ({
  type: CONNECT_INCOMING_STREAM,
  incomingPeerId: live.peer_id,
  currentlyWatching: live.user,
  description: live.description,
  startTime: live.Live_created_at
});
