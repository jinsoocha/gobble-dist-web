const routeAuth = (app, passport) => {
  app.get('/auth/facebook',
  passport.authenticate('facebook', {
    scope: ['user_friends']
  }));

  // Passport automatically calls req.login() & establishes a session
  // upon successful authentication
  app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    successRedirect: '/'
  }));

  app.get('/logout', (req, res) => {
    req.logout();
    res.status(302).redirect('/');
  });
};

export default routeAuth;
