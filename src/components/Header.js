import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h3>InstaClone</h3>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/Profile">Profile</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
  </header>
);

export default Header;
