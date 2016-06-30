import UserAppLayout from './UserAppLayout';
import Feed from './feed/Feed';
import Popular from './popular/Popular';
import Ripple from './ripple/Ripple';

const userAppRoutes = {
  path: '',
  component: UserAppLayout,
  childRoutes: [
    {
      path: '/',
      component: Feed
    },
    {
      path: '/feed',
      component: Feed
    },
    {
      path: '/popular',
      component: Popular
    },
    {
      path: '/ripple',
      component: Ripple
    }
  ]
};

export default userAppRoutes;
