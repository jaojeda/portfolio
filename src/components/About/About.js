/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import List from '../List';
import { techArr, toolArr } from '../../../data/data';
import styles from './About.css';

const About = () => {
  
  return (
    <div className={styles.About} >
      <h1 id="about">About Me</h1>
      <p>Hi! My name is Jose, I'm a Full-Stack developer that enjoys creating responsive apps.</p>
      <div>
        <List arr={techArr} />
        <List arr={toolArr} />
      </div>
    </div>
  
  );
};

export default About;
