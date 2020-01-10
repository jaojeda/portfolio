import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Title</h1>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </header>
);

export default Header;
