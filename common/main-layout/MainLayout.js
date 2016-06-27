import React, { PropTypes } from 'react';

import Footer from './Footer';
import NavBarAuth from './NavBarAuth';
import NavBarDefault from './NavBarDefault';

const MainLayout = (props) => (
  <div className="main-layout">
    {props.userIsAuth ? <NavBarAuth /> : <NavBarDefault />}
    <div className="content">
      {props.children}
    </div>
    <Footer />
  </div>
);

MainLayout.propTypes = {
  userIsAuth: PropTypes.bool.isRequired
};

export default MainLayout;
