import { isAuth } from './../lib/auth-utils';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './../../common/configureStore';
const store = configureStore();

import Landing from './../../common/landing/Landing';
const landingRoot = ReactDOM.renderToString(
  <Provider store={store}>
    <Landing />
  </Provider>
);

import UserApp from './../../common/user-app/UserApp';
const userAppRoot = ReactDOM.renderToString(
  <UserApp />
);

const routeLanding = (app) => {
  app.get('/', (req, res) => {
    if (isAuth(req)) {
      res.status(200).render('user-app', {
        root: userAppRoot
      });
    } else {
      res.status(200).render('landing', {
        root: landingRoot
      });
    }
  });
};

export default routeLanding;
