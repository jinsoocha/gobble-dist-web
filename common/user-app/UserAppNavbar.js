import React from 'react';
import { Link } from 'react-router';

const UserAppNavbar = () => (
  <div className="user-app-navbar pure-menu pure-menu-horizontal">
    <ul className="pure-menu-list">
      <li className="pure-menu-item"><Link to="/feed" className="pure-menu-link">Feed</Link></li>
      <li className="pure-menu-item"><Link to="/trending" className="pure-menu-link">Trending</Link></li>
      <li className="pure-menu-item"><Link to="/live" className="pure-menu-link">Live</Link></li>
    </ul>
  </div>
);

export default UserAppNavbar;
