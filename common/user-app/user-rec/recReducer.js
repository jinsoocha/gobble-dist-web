const recInitialState = {
  recs: [],
};

const recReducer = function(state = recInitialState, action) {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case 'GET_RECS':
      nextState.recs = action.recs;
      return nextState;
    default:
      return state;
  }
};

export default recReducer;
