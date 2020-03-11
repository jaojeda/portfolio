import React from 'react';
import { Link } from 'react-scroll';
import styles from './Header.css';
import MediaLinks from './MediaLinks.js';
import { links } from '../../../data/data.js';

const Header = () => (
  <header className={styles.Header} >
    <img src='../../../assets/logo.png' />
    <div>
      <Link className={styles.buttons} activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>HOME</Link>
      <Link className={styles.buttons} activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>ABOUT</Link>
      <Link className={styles.buttons} activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>PROJECTS</Link>
    </div>
    <MediaLinks links={links} />
  </header>
);

export default Header;
