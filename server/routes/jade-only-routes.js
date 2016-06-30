import { isAuth } from './../lib/auth-utils';

const routeJadeViews = (app) => {
  app.get('/login', (req, res) => {
    if (isAuth(req)) {
      res.status(302).redirect('/');
    } else {
      res.status(200).render('login');
    }
  });
};

export default routeJadeViews;
