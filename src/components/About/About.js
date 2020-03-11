/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import List from '../List';
import { toolArr, backEnd, frontEnd, databases, langArr } from '../../../data/data';
import styles from './About.css';

const About = () => {
  
  return (
    <div className={styles.About} >
      <h1 id="about">ABOUT ME</h1>
      <p>Hi! My name is Jose, I'm a Full-Stack developer that enjoys creating responsive apps.</p>
      <div>
        <List arr={langArr} title={'LANGUAGES'} />
        <List arr={toolArr} title={'TOOLS'} />
        <List arr={backEnd} title={'BACK END'} />
        <List arr={frontEnd} title={'FRONT END'} />
        <List arr={databases} title={'DATABASES'} />
      </div>
    </div>
  
  );
};

export default About;
