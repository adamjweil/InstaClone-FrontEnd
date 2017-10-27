import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <header>
    
    <ul className="main-nav">
      <h2 className="NavHeader">InstaClone</h2>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/Profile">Profile</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
  </header>
);

export default Header;
