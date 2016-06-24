import { isAuth } from './../lib/auth-utils';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';

import generateInitialState from './../lib/generateInitialState';
import configureStore from './../../common/configureStore';

import Landing from './../../common/landing/Landing';
import UserApp from './../../common/user-app/UserApp';

const renderUserApp = (req, res) => {
  generateInitialState(req, res, initialState => {
    const store = configureStore(initialState);

    res.status(200).render('user-app', {
      root: ReactDOM.renderToString(
        <Provider store={store}>
          <UserApp />
        </Provider>
      ),
      initialState
    });
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

const routeIndex = (app) => {
  app.get('/', (req, res) => {
    if (isAuth(req)) {
      renderUserApp(req, res);
    } else {
      renderLanding(req, res);
    }
  });
};

export default routeIndex;
