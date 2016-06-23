const { requireAuth, checkAuth } = require('./../lib/auth-utils');

const routeViews = (app) => {
  app.get('/*', (req, res) => {
    res.status(200).render('landing', {});
  });
};

export default routeViews;
