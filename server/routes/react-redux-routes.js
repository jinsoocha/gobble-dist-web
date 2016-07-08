import { isAuth } from './../lib/auth-utils';
import fetch from 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom/server';

import { Provider } from 'react-redux';
import generateInitialState from './../lib/generateInitialState';
import configureStore from './../../common/configureStore';

import { match, RouterContext } from 'react-router';

import MainLayoutContainer from './../../common/main-layout/MainLayoutContainer';
import userAppRoutes from './../../common/user-app/userAppRoutes';

import About from './../../common/about/About';
import FoodLanding from './../../common/food-landing/FoodLanding';
import FoodProductContainer from './../../common/food-product/FoodProductContainer';
import SearchContainer from './../../common/search/SearchContainer';
import ProfileContainer from './../../common/profile/ProfileContainer';
import Landing from './../../common/landing/Landing';

const renderAbout = (req, res) => {
  generateInitialState(req, res, false, false, initialState => {
    const store = configureStore(initialState);

    res.status(200).render('about', {
      root: ReactDOM.renderToString(
        <Provider store={store}>
          <About />
        </Provider>
      ),
      initialState
    });
  });
};

const renderFoodLanding = (req, res) => {
  generateInitialState(req, res, false, false, initialState => {
    const store = configureStore(initialState);

    res.status(200).render('food-landing', {
      root: ReactDOM.renderToString(
        <Provider store={store}>
          <FoodLanding />
        </Provider>
      ),
      initialState
    });
  });
};

const renderFoodProduct = (req, res) => {
  generateInitialState(req, res, false, false, initialState => {
    const store = configureStore(initialState);

    res.status(200).render('food-product', {
      root: ReactDOM.renderToString(
        <Provider store={store}>
          <FoodProductContainer />
        </Provider>
      ),
      initialState
    });
  });
};

const renderSearch = (req, res) => {
  generateInitialState(req, res, false, false, initialState => {
    const store = configureStore(initialState);

    res.status(200).render('search', {
      root: ReactDOM.renderToString(
        <Provider store={store}>
          <SearchContainer />
        </Provider>
      ),
      initialState
    });
  });
};

const renderProfile = (req, res) => {
  generateInitialState(req, res, true, false, initialState => {
    const store = configureStore(initialState);

    res.status(200).render('profile', {
      root: ReactDOM.renderToString(
        <Provider store={store}>
          <ProfileContainer />
        </Provider>
      ),
      initialState
    });
  });
};

const renderLanding = (req, res) => {
  generateInitialState(req, res, false, false, initialState => {
    const store = configureStore(initialState);

    res.status(200).render('landing', {
      root: ReactDOM.renderToString(
        <Provider store={store}>
          <Landing />
        </Provider>
      ),
      initialState
    });
  });
};

const renderUserApp = (req, res, renderProps) => {
  // Valid React Router route found - render corresponding component
  generateInitialState(req, res, false, true, initialState => {
    const store = configureStore(initialState);

    res.status(200).render('user-app', {
      root: ReactDOM.renderToString(
        <Provider store={store}>
          <MainLayoutContainer>
            <RouterContext {...renderProps} />
          </MainLayoutContainer>
        </Provider>
      ),
      initialState
    });
  });
};

// Route the User App w/ React Router routes, user profiles, and catch 404s
const routeDynamicRoutes = (req, res) => {
  match({ routes: userAppRoutes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      if (isAuth(req)) {
        renderUserApp(req, res, renderProps);
      } else {
        res.status(401).redirect('/login');
      }
    } else {
      const facebookId = req.url.slice(1);
      fetch(`${process.env.GOBBLE_API_URL}/user?facebook_id=${facebookId}`)
        .then(fetchedRes => {
          if (fetchedRes.status === 200) {
            renderProfile(req, res);
          } else {
            res.status(404).render('404');
          }
        });
    }
  });
};

const routeReactRedux = (app) => {
  app.get('/about', (req, res) => {
    renderAbout(req, res);
  });

  app.get('/food', (req, res) => {
    renderFoodLanding(req, res);
  });

  app.get('/food/:upc', (req, res) => {
    console.log('UPC', req.params.upc);
    renderFoodProduct(req, res);
  });

  app.get('/search', (req, res) => {
    console.log('SEARCH QUERY', req.query.q);
    renderSearch(req, res);
  });

  app.get('/', (req, res, next) => {
    if (!isAuth(req)) {
      renderLanding(req, res);
    } else {
      next();
    }
  });

  app.get('/*', (req, res) => {
    routeDynamicRoutes(req, res);
  });
};

export default routeReactRedux;
