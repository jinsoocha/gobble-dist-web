import React from 'react';

const NavBarAuth = () => (
  <div className="navbar-auth navbar-wrapper">
    <div className="pure-menu pure-menu-horizontal">
      <a href="/" className="pure-menu-heading">GOBBLE LOGO HERE</a>
      <ul className="pure-menu-list">
        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Products</a></li>
        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Profile</a></li>
        <li className="pure-menu-item"><a href="/logout" className="pure-menu-link">Sign out</a></li>
      </ul>
    </div>
  </div>
);

export default NavBarAuth;
