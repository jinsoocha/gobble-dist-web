import React, { PropTypes } from 'react';

import Footer from './Footer';
import NavBarAuthContainer from './NavBarAuthContainer';
import NavBarDefault from './NavBarDefault';

const MainLayout = (props) => (
  <div className="main-layout">
    <div className="top-border"></div>
    {props.userIsAuth ? <NavBarAuthContainer /> : <NavBarDefault />}
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
