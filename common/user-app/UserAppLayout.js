import React from 'react';
import UserAppNavbar from './UserAppNavbar';

const UserAppLayout = (props) => (
  <div className="user-app-layout">
    <UserAppNavbar />
    <div className="user-app-content">
      {props.children}
    </div>
  </div>
);

export default UserAppLayout;
