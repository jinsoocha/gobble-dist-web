import React from 'react';
import SearchBar from './SearchBar';

const NavbarDefault = () => (
  <div className="navbar-default navbar-wrapper">
    <div className="pure-menu pure-menu-horizontal">
      <a href="/" className="pure-menu-heading">LOGO</a>
      <SearchBar />
      <ul className="pure-menu-list">
        <li className="pure-menu-item"><a href="/food" className="pure-menu-link">Food</a></li>
        <li className="pure-menu-item"><a href="/about" className="pure-menu-link">About</a></li>
        <li className="pure-menu-item"><a href="/login" className="pure-menu-link">Sign in</a></li>
      </ul>
    </div>
  </div>
);

export default NavbarDefault;
