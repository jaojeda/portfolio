import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Title</h1>
    <nav>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
