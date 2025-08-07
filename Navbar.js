// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">FlavorNest
</div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/login' ? 'active' : ''}>
          <Link to="/login">Login</Link>
        </li>
        <li className={location.pathname === '/register' ? 'active' : ''}>
          <Link to="/register">Register</Link>
        </li>
        <li className={location.pathname === '/cart' ? 'active' : ''}>
          <Link to="/cart">Cart</Link>
        </li>
        <li className={location.pathname === '/order' ? 'active' : ''}>
          <Link to="/order">Order</Link>
        </li>
        <li className={location.pathname === '/chef-dashboard' ? 'active' : ''}>
          <Link to="/chef-dashboard">Chef</Link>
        </li>
        <li className={location.pathname === '/admin-dashboard' ? 'active' : ''}>
          <Link to="/admin-dashboard">Admin</Link>
        </li>
        <li className={location.pathname === '/track-order' ? 'active' : ''}>
          <Link to="/track-order">Track</Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
