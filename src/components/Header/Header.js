import React from 'react';
import { Link } from 'react-scroll';
import styles from './Header.css';

const Header = () => (
  <header className={styles.Header} >
    <h1>Title</h1>
    <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
  </header>
);

export default Header;
