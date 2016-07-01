import session from 'express-session';
import { checkStatus, parseJSON, handleError } from './../lib/fetch-utils';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import fetch from 'isomorphic-fetch';

const createNewUser = (profile) => {
  console.log('GOT HERE', profile);

  // const newUser = {
  //   facebook_id: req.body.facebook_id,
  //   first_name: req.body.first_name,
  //   last_name: req.body.last_name,
  //   display_name: req.body.display_name,
  //   gender: req.body.gender,
  //   photo_url: req.body.photo_url,
  // };

  return fetch(`${process.env.GOBBLE_API_URL}/user`, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(checkStatus)
    .then(parseJSON)
    .then(user => {
      return user;
    })
    .catch(err => {
      handleError(err);
      res.sendStatus(err.res.status);
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
      callbackURL: `${process.env.PROTOCOL}${process.env.HOST}:${process.env.PORT}/auth/facebook/callback`,
      enableProof: true,
      profileFields: ['id', 'name', 'email', 'displayName', 'gender', 'picture.type(large)']
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(profile);
      process.nextTick(() => {
        fetch(`${process.env.GOBBLE_API_URL}/user?facebook_id=${profile.id}`)
          .then(checkStatus)
          .then(parseJSON)
          .then(res => {
            if (res.status === 200) {
              console.log('Existing user authenticated.');
              console.log(res);
            } else if (res.status === 404) {
              // User is new - persist the new user
              createNewUser(profile)
                .then(user => {
                  console.log('New user successfully persisted:', user);
                  done(null, user);
                });
            } else {
              handleError(err);
              res.sendStatus(err.res.status);
            }
          });
      });
        // User.where({ facebookId: profile.id }).fetch()
        //   .then((user) => {
        //     // Persist user if not found
        //     if (!user) {
        //       return new User({
        //         name: profile.displayName,
        //         facebookId: profile.id,
        //         picture: profile.photos[0].value
        //       }).save();
        //     }
        //     return user;
        //   })
        //   .then((user) => {
        //     done(null, user);
        //   })
        //   .catch((err) => {
        //     done(err, null);
        //   });
    }
  ));

  // Passport session serialization setup
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    // Implement through gobble-db interface
    // User.where({ facebookId: facebookId }).fetch()
    //   .then((user) => {
    //     done(null, user);
    //   })
    //   .catch((err) => {
    //     done(err, null);
    //   });

    done(null, user);
  });
};

export default configAuth;
