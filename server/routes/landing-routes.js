import { requireAuth, checkAuth } from './../lib/auth-utils';

// NOTE: Landing page does not utilize Redux
import React from 'react';
import ReactDOM from 'react-dom';

import App from './../../common/landing/App';
const landingRoot = ReactDOM.renderToString(
  <App />
);

const routeLanding = (app) => {
  app.get('/*', (req, res) => {
    res.status(200).render('landing', {
      root: landingRoot
    });
  });
};

export default routeLanding;
