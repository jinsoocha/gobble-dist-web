const routeJadeViews = (app) => {
  app.get('/login', (req, res) => {
    res.status(200).render('login');
  });
};

export default routeJadeViews;
