const postbitInitialState = {
  posts: [],
};

const postbitReducer = function(state = postbitInitialState, action) {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case 'UPDATE_POSTS':
      nextState.posts = action.posts;
      return nextState;
    default:
      return state;
  }
};

export default postbitReducer;
