import React from 'react';
import PropTypes from 'prop-types';

const List = ({ arr }) => {
  const listElement = arr.map((str, i) => (
    <li key={i}>{str}</li>
  ));
  return (
    <ul>
      {listElement}
    </ul>
  );
};

List.propTypes = {
  arr: PropTypes.array.isRequired
};

export default List;
