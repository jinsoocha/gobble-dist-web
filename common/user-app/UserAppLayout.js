import React from 'react';
import UserAppNavbar from './UserAppNavbar';

const UserAppLayout = (props) => (
  <div className="user-app-layout">
    <h1>User App Page</h1>
    <UserAppNavbar />
    {props.children}
  </div>
);

export default UserAppLayout;
