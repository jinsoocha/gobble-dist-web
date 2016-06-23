const { requireAuth, checkAuth } = require('./../lib/auth-utils');

module.exports = (app) => {
  app.get('/*', (req, res) => {
    res.status(200).render('landing', {});
  });
};
