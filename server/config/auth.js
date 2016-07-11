import session from 'express-session';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import fetch from 'isomorphic-fetch';

const createNewUser = (profile) => {
  const newUser = {
    facebook_id: profile.id,
    first_name: profile.name.givenName,
    last_name: profile.name.familyName,
    display_name: profile.displayName,
    gender: profile.gender,
    photo_url: profile.photos[0].value
  };

  return fetch(`${process.env.GOBBLE_API_URL}/user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  }).then(res => res.json())
    .then(user => {
      console.log('POSTED: ', user);
      return user;
    });
};

const configAuth = (app, passport) => {
  // Express session middleware
  app.use(session({
    name: 'gobble.sid',
    secret: process.env.SESSION_SECRET,
    saveUnitialized: true,
    resave: false,
    cookie: { maxAge: 10000000 }
  }));

  // Initialize passport authentication & persistent sessions
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new FacebookStrategy({
      // Register the application using a Facebook Developer Account
      clientID: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: `${process.env.PROTOCOL}159.203.216.209:${process.env.PORT}/auth/facebook/callback`,
      enableProof: true,
      profileFields: ['id', 'name', 'email', 'displayName', 'gender', 'picture.type(large)']
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(profile);
      process.nextTick(() => {
        fetch(`${process.env.GOBBLE_API_URL}/user?facebook_id=${profile.id}`)
          .then(res => {
            if (res.status === 404) {
              // User is new - persist the new user
              createNewUser(profile)
                .then(user => {
                  console.log('New user successfully persisted:', user);
                  done(null, user);
                });
            } else if (res.status === 200) {
              return res.json()
                .then(user => {
                  console.log('Existing user authenticated:', user);
                  done(null, user);
                });
            } else {
              res.sendStatus(res.status);
            }
          });
      });
    }
  ));

  // Passport session serialization setup
  passport.serializeUser((user, done) => {
    done(null, user.facebook_id);
  });

  passport.deserializeUser((facebookId, done) => {
    fetch(`${process.env.GOBBLE_API_URL}/user?facebook_id=${facebookId}`)
      .then(res => res.json())
      .then(user => {
        done(null, user);
      });
  });
};

export default configAuth;
