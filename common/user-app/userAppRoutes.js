import UserAppLayout from './UserAppLayout';
import Home from './home/Home';

const userAppRoutes = {
  path: '',
  component: UserAppLayout,
  childRoutes: [
    {
      path: '/',
      component: Home
    }
  ]
};

export default userAppRoutes;
