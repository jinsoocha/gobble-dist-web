import UserAppLayout from './UserAppLayout';
import Feed from './feed/Feed';
import Trending from './trending/Trending';
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
      path: '/trending',
      component: Trending
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
