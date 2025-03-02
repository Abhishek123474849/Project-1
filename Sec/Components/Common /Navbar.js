import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/customer-dashboard">Customer Dashboard</Link></li>
        <li><Link to="/artist-dashboard">Artist Dashboard</Link></li>
        <li><Link to="/learning-portal">Learning Portal</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
