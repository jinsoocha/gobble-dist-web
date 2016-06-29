import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './../common/configureStore';
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store);

import MainLayoutContainer from './../common/main-layout/MainLayoutContainer';
import userAppRoutes from './../common/user-app/userAppRoutes';

const UserApp = () => (
  <Provider store={store}>
    <MainLayoutContainer>
      <Router
        routes={userAppRoutes}
        history={history}
      />
    </MainLayoutContainer>
  </Provider>
);

ReactDOM.render(
  <UserApp />,
  document.querySelector('.root')
);
