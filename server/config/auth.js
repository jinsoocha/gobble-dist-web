import session from 'express-session';
import { Strategy as FacebookStrategy } from 'passport-facebook';

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
      profileFields: ['id', 'name', 'profileUrl', 'displayName', 'gender', 'picture.type(large)', 'emails']
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(() => {
        // Implement through gobble-db interface
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
        done(null, profile);
      });
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
