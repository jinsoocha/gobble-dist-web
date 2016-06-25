import React, { PropTypes } from 'react';

const MainLayout = (props) => (
  <div className="main-layout">
    <h3>{String(props.userIsAuth)}</h3>
    {props.children}
  </div>
);

MainLayout.propTypes = {
  userIsAuth: PropTypes.bool.isRequired
};

export default MainLayout;
