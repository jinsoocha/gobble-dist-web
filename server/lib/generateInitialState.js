// import fetch from 'isomorphic-fetch';
import { isAuth } from './auth-utils';

// const fetchUser = () => {
//   return fetch('http://localhost:4568/is-auth')
//     .then(response => response.json());
// };

const generateInitialState = (req, res, callback) => {
  const initialState = {
    layout: {
      searchBarQuery: '',
      isAuth: isAuth(req)
    },
    search: {
      resultsQuery: !!req.query.q ? req.query.q : ''
    }
  };

  console.log('INITIAL STATE', initialState);
  callback(initialState);
};

export default generateInitialState;
