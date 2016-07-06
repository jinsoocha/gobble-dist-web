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
      },
      modalIsOpen: false
    },
    search: {
      query: !!req.query.q ? req.query.q : '',
      isLoading: true,
      results: {
        users: [],
        products: [],
        posts: []
      },
      view: 'all'
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
      photoUrl: '',
      isFollowing: false,
      isShowingUnfollowButton: false,
      view: 'posts',
      posts: [],
      following: [],
      followers: []
    },
    addPost: {
      postType: '',
    },
    post: {
      facebookId: '',
    }
  };

  if (initialState.layout.isAuth) {
    initialState.layout.navBarUser = {
      facebookId: req.user.facebook_id,
      firstName: req.user.first_name,
      photoUrl: req.user.photo_url,
    };
    initialState.post = {
      facebookId: req.user.facebook_id,
      firstName: req.user.first_name,
      lastName: req.user.last_name,
      photoUrl: req.user.photo_url,
    };
  }

  // Is a profile page directly off the base URL
  if (isProfile) {
    const facebookId = req.url.slice(1);
    fetch(`${process.env.GOBBLE_API_URL}/user?facebook_id=${facebookId}`)
      .then(fetchedUser => fetchedUser.json())
      .then(user => {
        initialState.profile = Object.assign({}, initialState.profile, {
          facebookId: user.facebook_id,
          firstName: user.first_name,
          lastName: user.last_name,
          displayName: user.display_name,
          photoUrl: user.photo_url
        });

        return fetch(`${process.env.GOBBLE_API_URL}/following?facebook_id=${facebookId}`);
      })
      .then(fetchedFollowing => fetchedFollowing.json())
      .then(following => {
        initialState.profile.following = following;

        return fetch(`${process.env.GOBBLE_API_URL}/followers?facebook_id=${facebookId}`);
      })
      .then(fetchedFollowers => fetchedFollowers.json())
      .then(followers => {
        initialState.profile.followers = followers;

        if (!isAuth(req)) {
          console.log('INITIAL STATE', initialState);
          callback(initialState);
        } else {
          return fetch(`${process.env.GOBBLE_API_URL}/is_following?follower_id=${req.user.facebook_id}&followed_id=${facebookId}`);
        }
      })
      .then(fetchedIsFollowing => fetchedIsFollowing.json())
      .then(isFollowing => {
        initialState.profile.isFollowing = isFollowing;
        console.log('INITIAL STATE', initialState);
        callback(initialState);
      });
  } else {
    console.log('INITIAL STATE', initialState);
    callback(initialState);
  }
};

export default generateInitialState;
