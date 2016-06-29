import React from 'react';
import SearchBarContainer from './SearchBarContainer';

const NavbarDefault = () => (
  <div className="navbar-auth navbar-wrapper">
    <div className="navbar-menu pure-menu pure-menu-horizontal">
      <a href="/" className="navbar-menu-heading pure-menu-heading">LOGO</a>
      <SearchBarContainer />
      <ul className="navbar-menu-list pure-menu-list">
        <li className="pure-menu-item"><a href="/food" className="navbar-menu-link pure-menu-link">Food</a></li>
        <li className="pure-menu-item"><a href="/about" className="navbar-menu-link pure-menu-link">About</a></li>
        <li className="pure-menu-item"><a href="/login" className="navbar-menu-link pure-menu-link">Sign in</a></li>
      </ul>
    </div>
  </div>
);

export default NavbarDefault;
