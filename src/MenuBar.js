import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <ul className="menu-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/tournament">Tournament</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default MenuBar;

