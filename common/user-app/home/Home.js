import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div className="home-view">
    <h1><Link to="/">UserApp Page</Link></h1>
    <Link to="/home">Home</Link>
    <div><a href="/logout">Sign Out</a></div>
  </div>
);

export default Home;
