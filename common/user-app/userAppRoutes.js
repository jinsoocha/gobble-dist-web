import UserAppLayout from './UserAppLayout';
import Home from './home/Home';

// const userAppRoutes = () => (
//   <Route path="/" component={UserAppLayout} >
//     <IndexRoute component={Home} />
//     <Route path="home" component={Home} />
//   </Route>
// );

const UserAppRoutes = {
  path: '',
  component: UserAppLayout,
  childRoutes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    }
  ]
};

export default UserAppRoutes;
