import { combineReducers } from 'redux';

const userInitialState = {
  isAuth: false
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const searchInitialState = {
  query: ''
};

const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer
});

export default rootReducer;
