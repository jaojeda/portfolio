import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, img, description, tech, repoLink, demoLink }) => (
  <div>
    <h3>{title}</h3>
    <img src={img} alt={`image of ${title}`} />
    <p>{description}</p>
    <p>{tech}</p>
    <nav>
      <a href={demoLink}>Site</a>
      <span>|</span>
      <a href={repoLink}>Repo</a>
    </nav>
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  repoLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired
};

export default Project;
