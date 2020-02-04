import React from 'react';
import Project from './Project';
import { projects } from '../../../data/data';

const Projects = () => {

  const projectElements = projects.map((project, i) => (
    <Project key={i} {...project} />
  ));

  return (
    <>
      <h1 id="projects">Projects</h1>
      <section>
        {projectElements}
      </section>
    </>
  );
};


export default Projects;
