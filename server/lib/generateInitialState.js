import { isAuth } from './auth-utils';

const generateInitialState = (req, res, callback) => {
  const initialState = {
    layout: {
      searchBarQuery: '',
      isAuth: isAuth(req),
      navBarUser: {
        facebookId: '',
        firstName: '',
        photoUrl: ''
      }
    },
    search: {
      resultsQuery: !!req.query.q ? req.query.q : ''
    },
    foodProduct: {
      upc: !!req.params.upc ? req.params.upc : ''
    }
  };

  if (isAuth(req)) {
    initialState.layout.navBarUser = {
      facebookId: req.user.facebook_id,
      firstName: req.user.first_name,
      photoUrl: req.user.photo_url
    };
  }

  console.log('INITIAL STATE', initialState);
  callback(initialState);
};

export default generateInitialState;
