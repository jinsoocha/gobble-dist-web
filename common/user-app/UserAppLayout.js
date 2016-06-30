import React from 'react';
import UserAppNavbar from './UserAppNavbar';

const UserAppLayout = (props) => (
  <div>
    <UserAppNavbar />
    <div className="user-app-layout">
      {props.children}
    </div>
  </div>
);

export default UserAppLayout;
