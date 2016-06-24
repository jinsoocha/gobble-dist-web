import { combineReducers } from 'redux';

function userReducer(state, action) {
  if (typeof state === 'undefined') {
    return {
      userIsAuth: true
    };
  }

  // For now, don’t handle any actions
  // and just return the state given to us.
  return state;
}

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
