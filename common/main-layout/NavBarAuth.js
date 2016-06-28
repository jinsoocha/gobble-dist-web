import React from 'react';
import SearchBarContainer from './SearchBarContainer';

const NavBarAuth = () => (
  <div className="navbar-auth navbar-wrapper">
    <div className="pure-menu pure-menu-horizontal">
      <a href="/" className="pure-menu-heading">LOGO</a>
      <SearchBarContainer />
      <ul className="pure-menu-list">
        <li className="pure-menu-item"><a href="/food" className="pure-menu-link">Food</a></li>
        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Profile</a></li>
        <li className="pure-menu-item"><a href="/logout" className="pure-menu-link">Sign out</a></li>
      </ul>
    </div>
  </div>
);

export default NavBarAuth;
