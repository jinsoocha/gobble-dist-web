exports.requireAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/welcome');
  }
};

exports.checkAuth = (req) => req.isAuthenticated();
