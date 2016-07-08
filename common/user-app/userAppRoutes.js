import UserAppLayout from './UserAppLayout';
import Feed from './feed/Feed';
import Popular from './popular/Popular';
import Ripple from './ripple/Ripple';
import LiveContainer from './live/LiveContainer';

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
    },
    {
      path: '/live',
      component: LiveContainer
    }
  ]
};

export default userAppRoutes;
