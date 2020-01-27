import React from 'react';
import PropTypes from 'prop-types';
import MediaLink from './MediaLink';

const MediaLinks = ({ links }) => {
  const linkElements = links.map((link, i) => (
    <li key={i}>
      <MediaLink {...link} />
    </li>
  ));

  return (
    <ul>
      {linkElements}
    </ul>
  );
};

MediaLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })).isRequired
};

export default MediaLinks;
