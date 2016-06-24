import { isAuth } from './../lib/auth-utils';

import React from 'react';
import ReactDOM from 'react-dom/server';

// NOTE: Landing page does not utilize Redux
import Landing from './../../common/landing/Landing';
const landingRoot = ReactDOM.renderToString(
  <Landing />
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
