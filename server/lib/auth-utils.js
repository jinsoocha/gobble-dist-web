const requireAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/welcome');
  }
};

const isAuth = (req) => req.isAuthenticated();

export { requireAuth, isAuth };
