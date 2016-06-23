const requireAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/welcome');
  }
};

const checkAuth = (req) => req.isAuthenticated();

export { requireAuth, checkAuth };
