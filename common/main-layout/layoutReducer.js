import { SET_USER_AUTH } from './LayoutActions';

const layoutInitialState = {
  userIsAuth: false
};

const layoutReducer = (state = layoutInitialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return Object.assign({}, state, {
        userIsAuth: action.userIsAuth
      });
    default:
      return state;
  }
};

export default layoutReducer;
