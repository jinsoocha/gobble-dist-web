import React, { PropTypes } from 'react';

import Footer from './Footer';

const MainLayout = (props) => (
  <div className="main-layout">
    <h3>{String(props.userIsAuth)}</h3>
    {props.children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  userIsAuth: PropTypes.bool.isRequired
};

export default MainLayout;
