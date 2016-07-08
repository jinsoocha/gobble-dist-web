export const RESET_INCOMING_STREAM = 'RESET_INCOMING_STREAM';
export const resetIncomingStream = () => ({
  type: RESET_INCOMING_STREAM
});

export const CHANGE_LIVE_OPTIONS_VIEW = 'CHANGE_LIVE_OPTIONS_VIEW';
export const changeLiveOptionsView = view => ({
  type: CHANGE_LIVE_OPTIONS_VIEW,
  view
});
