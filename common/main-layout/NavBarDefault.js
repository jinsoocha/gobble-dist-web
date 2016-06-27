import React from 'react';

const NavbarDefault = () => (
  <div className="navbar-default navbar-wrapper">
    <div className="pure-menu pure-menu-horizontal">
      <a href="/" className="pure-menu-heading">GOBBLE LOGO HERE</a>
      <ul className="pure-menu-list">
        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Products</a></li>
        <li className="pure-menu-item"><a href="/about" className="pure-menu-link">About</a></li>
        <li className="pure-menu-item"><a href="/login" className="pure-menu-link">Sign in</a></li>
      </ul>
    </div>
  </div>
);

export default NavbarDefault;
