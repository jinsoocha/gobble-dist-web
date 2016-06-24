import 'babel-polyfill';

// Load environment variables
import dotenv from 'dotenv';
if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: './env/development.env' });
} else if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: './env/production.env' });
}

import express from 'express';
const app = express();

import initialize from './config/initialize';
initialize(app, express);

// Passport Facebook Strategy Authentication
import passport from 'passport';

import configAuth from './config/auth';
configAuth(app, passport);

import routeAuth from './routes/auth-routes';
routeAuth(app, passport);

// Server-side Rendering
import routeJadeViews from './routes/jade-only-routes';
routeJadeViews(app);

import routeIndex from './routes/index-routes';
routeIndex(app);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.APP_NAME} is listening on port ${process.env.PORT}.`);
});

export default app;
