import React from 'react';
import PropTypes from 'prop-types';
import styles from './MediaLink.css';

const MediaLink = ({ img, link }) => (
  <a className={styles.MediaLink} href={link}>
    <img src={img} />
  </a>
);

MediaLink.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default MediaLink;
