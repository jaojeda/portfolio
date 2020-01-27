import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

const Projects = ({ projects }) => {
  const projectElements = projects.map((project) => (
    <>
      <Project {...project} />
    </>
  ));

  return (
    <>
      <h1>Projects</h1>
      <section>
        {projectElements}
      </section>
    </>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.array.isRequired,
    repoLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired
  })).isRequired
};

export default Projects;
