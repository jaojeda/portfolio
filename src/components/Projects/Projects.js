import React from 'react';
import Project from './Project';
import { projects } from '../../../data/data';
import styles from './Project.css';

const Projects = () => {

  const projectElements = projects.map((project, i) => (
    <li key={i}>
      <Project {...project} />
    </li>
  ));

  return (
    <>
      <h1 id="projects">Projects</h1>
      <ul className={styles.Project}>
        {projectElements}
      </ul>
    </>
  );
};


export default Projects;
