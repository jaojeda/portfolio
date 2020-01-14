import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MediaLink = ({ img, link }) => (
  <Link to={link}>
    <img src="img" />
  </Link>
);

MediaLink.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default MediaLink;
