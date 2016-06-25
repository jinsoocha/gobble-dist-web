import React from 'react';

const UserAppLayout = (props) => (
  <div className="user-app-layout">
    {props.children}
  </div>
);

// UserAppLayout.propTypes = {
//   children: PropTypes.element.isRequired
// };

export default UserAppLayout;
