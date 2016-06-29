import React from 'react';
import SearchBarContainer from './SearchBarContainer';

const NavBarAuth = () => (
  <div className="navbar-auth navbar-wrapper">
    <div className="navbar-menu pure-menu pure-menu-horizontal">
      <a href="/" className="navbar-menu-heading pure-menu-heading">LOGO</a>
      <SearchBarContainer />
      <ul className="navbar-menu-list pure-menu-list">
        <li className="pure-menu-item"><a href="/" className="navbar-menu-link pure-menu-link">Home</a></li>
        <li className="pure-menu-item"><a href="#" className="navbar-menu-link pure-menu-link">Profile</a></li>
        <li className="pure-menu-item">
          <a href="#" className="gobble-modal-link navbar-menu-link pure-menu-link">
            <i className="gobble-modal-link-icon fa fa-cutlery" aria-hidden="true" />
            Gobble!
          </a>
        </li>
        <li className="navbar-dropdown pure-menu-item pure-menu-has-children pure-menu-allow-hover">
          <div className="pure-menu-link"><i className="fa fa-cog" aria-hidden="true" /></div>
          <ul className="pure-menu-children">
            <li className="pure-menu-item"><a href="#" className="pure-menu-link dropdown-link">Settings</a></li>
            <li className="pure-menu-item"><a href="/logout" className="pure-menu-link dropdown-link">Sign out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

export default NavBarAuth;
