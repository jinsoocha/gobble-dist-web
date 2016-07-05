const searchInitialState = {
  0: [],
  1: []
};

const CommentsReducer = (state = searchInitialState, action) => {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case 'UPDATE_COMMENT':
      nextState[action.postId] = action.comments;
      return nextState;
    default:
      return state;
  }
};

export default CommentsReducer;
