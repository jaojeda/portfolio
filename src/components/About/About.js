/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import List from '../List';

const About = () => {
  const techArr = ['JavaScript', 'HTML', 'CSS'];
  const toolArr = ['Heroku', 'Netlify', 'Socket.io'];
  return (
    <>
      <h1>About Me</h1>
      <p>Hi! My name is Jose, I'm a Full-Stack developer that enjoys creating responsive apps.</p>
      <List arr={techArr} />
      <List arr={toolArr} />
    </>
  );
};

export default About;
