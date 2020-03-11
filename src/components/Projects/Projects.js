import React from 'react';
import Project from './Project';
import { projects } from '../../../data/data';
import styles from './Projects.css';

const Projects = () => {

  const projectElements = projects.map((project, i) => (
    <li key={i}>
      <Project {...project} />
    </li>
  ));

  return (
    <>
      <h1 id="projects">PROJECTS</h1>
      <ul className={styles.Projects}>
        {projectElements}
      </ul>
    </>
  );
};


export default Projects;
