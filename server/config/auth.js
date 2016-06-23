import session from 'express-session';
import { Strategy as FacebookStrategy } from 'passport-facebook';
// var User = require('../models/user');

const configAuth = (app, passport) => {
  // Express session middleware
  app.use(session({
    name: 'twofastpaws.sid',
    secret: process.env.SESSION_SECRET,
    saveUnitialized: true,
    resave: false,
    cookie: { maxAge: 10000000 }
  }));

  // Initialize passport authentication & persistent sessions
  app.use(passport.initialize());
  app.use(passport.session());
};

export default configAuth;
