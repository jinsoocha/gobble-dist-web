import React from 'react';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import MainLayoutContainer from './../main-layout/MainLayoutContainer';
import userAppRoutes from './userAppRoutes';

const UserApp = () => (
  <MainLayoutContainer>
    <Router
      routes={userAppRoutes}
      history={createBrowserHistory()}
    />
  </MainLayoutContainer>
);

export default UserApp;
