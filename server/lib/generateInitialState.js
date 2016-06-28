// import fetch from 'isomorphic-fetch';
import { isAuth } from './auth-utils';

// const fetchUser = () => {
//   return fetch('http://localhost:4568/is-auth')
//     .then(response => response.json());
// };

const generateInitialState = (req, res, callback) => {
  const initialState = {
    user: {
      isAuth: isAuth(req)
    },
    search: {
      query: ''
    }
  };

  console.log('INITIAL STATE', initialState);
  callback(initialState);
};

export default generateInitialState;
