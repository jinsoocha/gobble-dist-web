const requireAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/');
  }
};

const isAuth = (req) => req.isAuthenticated();

export { requireAuth, isAuth };
