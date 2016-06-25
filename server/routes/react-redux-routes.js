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

const renderUserApp = (req, res) => {
  match({ routes: userAppRoutes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
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
    } else {
      res.status(404).render('404');
    }
  });
};

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

const routeReactRedux = (app) => {
  app.get('/', (req, res, next) => {
    if (!isAuth(req)) {
      renderLanding(req, res);
    } else {
      next();
    }
  });

  app.get('/*', (req, res) => {
    renderUserApp(req, res);
  });
};

export default routeReactRedux;
