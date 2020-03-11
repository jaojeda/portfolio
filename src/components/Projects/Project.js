import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const Project = ({ title, img, description, tech, repoLink, demoLink }) => (
  <>
    <h3>{title}</h3>
    <img src={img} alt={`image of ${title}`} />
    <p>{description}</p>
    <p className={styles.emphasis}>{tech}</p>
    <nav>
      <a href={demoLink}>Site</a>
      <span>|</span>
      <a href={repoLink}>Repo</a>
    </nav>
  </>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired
};

export default Project;
