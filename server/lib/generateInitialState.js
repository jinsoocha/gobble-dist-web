import { isAuth } from './auth-utils';
import fetch from 'isomorphic-fetch';

const generateInitialState = (req, res, isProfile, callback) => {
  const initialState = {
    layout: {
      searchBarQuery: '',
      isAuth: isAuth(req),
      navBarUser: {
        facebookId: '',
        firstName: '',
        photoUrl: '',
        modalIsOpen: false
      }
    },
    search: {
      resultsQuery: !!req.query.q ? req.query.q : ''
    },
    foodProduct: {
      upc: !!req.params.upc ? req.params.upc : '',
      productAnalysis: {},
      categoryComparison: '',
      selectedProduct: 0,
      recommendationsStorage: {}
    },
    profile: {
      facebookId: '',
      firstName: '',
      lastName: '',
      displayName: '',
      photoUrl: ''
    }
  };

  if (initialState.layout.isAuth) {
    initialState.layout.navBarUser = {
      facebookId: req.user.facebook_id,
      firstName: req.user.first_name,
      photoUrl: req.user.photo_url,
      modalIsOpen: false
    };
  }

  // Is a profile page directly off the base URL
  if (isProfile) {
    const facebookId = req.url.slice(1);
    fetch(`${process.env.GOBBLE_API_URL}/user?facebook_id=${facebookId}`)
      .then(fetchedRes => fetchedRes.json())
      .then(user => {
        initialState.profile = {
          facebookId: user.facebook_id,
          firstName: user.first_name,
          lastName: user.last_name,
          displayName: user.display_name,
          photoUrl: user.photo_url
        };

        console.log('INITIAL STATE', initialState);
        callback(initialState);
      });
  } else {
    console.log('INITIAL STATE', initialState);
    callback(initialState);
  }
};

export default generateInitialState;
