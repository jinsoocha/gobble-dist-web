import React, { PropTypes } from 'react';

const UserAppLayout = (props) => (
  <div className="user-app-layout">
    {props.children}
  </div>
);

UserAppLayout.propTypes = {
  children: PropTypes.array.isRequired
};

export default UserAppLayout;
