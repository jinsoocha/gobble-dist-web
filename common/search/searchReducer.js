const searchInitialState = {
  query: '',
  isLoading: true,
  results: {
    users: [],
    products: [],
    posts: []
  },
  view: 'all'
};

const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default searchReducer;
