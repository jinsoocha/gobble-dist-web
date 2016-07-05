const commentInitialState = {
  // 0: [],
  // 1: []
};

const CommentsReducer = (state = commentInitialState, action) => {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case 'UPDATE_COMMENT':
      nextState[action.parentId] = action.comments;
      return nextState;
    case 'PUSH_COMMENT':
      try {
        nextState[action.comment.parentId] = nextState[action.comment.parentId].concat(action.comment);
      } catch (e) {
        nextState[action.comment.parentId] = [action.comment];
      }
      return nextState;
    default:
      return state;
  }
};

export default CommentsReducer;
