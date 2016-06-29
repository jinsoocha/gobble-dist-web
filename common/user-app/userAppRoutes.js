import UserAppLayout from './UserAppLayout';
import Feed from './feed/Feed';

// const userAppRoutes = () => (
//   <Route path="/" component={UserAppLayout} >
//     <IndexRoute component={Home} />
//     <Route path="home" component={Home} />
//   </Route>
// );

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
    }
  ]
};

export default userAppRoutes;
