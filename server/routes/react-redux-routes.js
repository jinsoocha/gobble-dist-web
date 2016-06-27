import { isAuth } from './../lib/auth-utils';

import React from 'react';
import ReactDOM from 'react-dom/server';

import { Provider } from 'react-redux';
import generateInitialState from './../lib/generateInitialState';
import configureStore from './../../common/configureStore';

import { match, RouterContext } from 'react-router';

import MainLayoutContainer from './../../common/main-layout/MainLayoutContainer';
import userAppRoutes from './../../common/user-app/userAppRoutes';

import Landing from './../../common/landing/Landing';
import About from './../../common/about/About';

const renderLanding = (req, res) => {
  generateInitialState(req, res, initialState => {
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

const renderAbout = (req, res) => {
  generateInitialState(req, res, initialState => {
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

const renderUserApp = (req, res, renderProps) => {
  // Valid React Router route found - render corresponding component
  generateInitialState(req, res, initialState => {
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

const routeReactRouter = (req, res) => {
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
      res.status(404).render('404');
    }
  });
};

const routeReactRedux = (app) => {
  app.get('/', (req, res, next) => {
    if (!isAuth(req)) {
      renderLanding(req, res);
    } else {
      next();
    }
  });

  app.get('/*', (req, res) => {
    routeReactRouter(req, res);
  });
};

export default routeReactRedux;
