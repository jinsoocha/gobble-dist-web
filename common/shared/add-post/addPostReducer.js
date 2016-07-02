import { CHANGE_POST_TYPE } from './AddPostActions';

const addPostInitialState = {
  postType: 'review'
};

const addPostReducer = (state = addPostInitialState, action) => {
  switch (action.type) {
    case CHANGE_POST_TYPE:
      return Object.assign({}, state, {
        postType: action.postType
      });
    default:
      return state;
  }
};

export default addPostReducer;
