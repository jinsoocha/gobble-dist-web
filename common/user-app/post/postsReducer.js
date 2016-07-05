const postbitInitialState = {
  posts: [],
};

const postbitReducer = function(state = postbitInitialState, action) {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case 'GET_POSTS_BY_DATE':
      nextState.posts = action.posts;
      return nextState;
    case 'GET_POSTS_BY_FRIENDS':
      nextState.posts = action.posts;
      return nextState;
    default:
      return state;
  }
};

export default postbitReducer;
