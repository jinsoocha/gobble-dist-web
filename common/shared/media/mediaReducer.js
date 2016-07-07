const mediaInitialState = {
  // 0: [],
  // 1: []
};

const mediaReducer = (state = mediaInitialState, action) => {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case 'UPDATE_MEDIA':
      nextState[action.postId] = action.media;
      return nextState;
    default:
      return state;
  }
};

export default mediaReducer;
