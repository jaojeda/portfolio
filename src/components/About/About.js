/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import List from '../List';
import { toolArr, backEnd, frontEnd, databases, langArr } from '../../../data/data';
import styles from './About.css';

const About = () => {
  
  return (
    <div className={styles.About} >
      <h1 id="about">ABOUT ME</h1>
      <p>I'm a software developer who believes good software design always keeps the end-user in mind and is as clean as it is clever. I have a focus on finding client centric solutions that can affect meaningful change rooted in six years experience throughout multiple roles in the insurance industry.</p>
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
