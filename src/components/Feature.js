import React from 'react';
import PropTypes from 'prop-types';

import './Feature.scss';

function Feature({
  title, description, icon, right,
}) {
  console.log(right);
  return (
    <>
      <h4>{title}</h4>
      <p>{description}</p>
      <i className={`fal ${icon}`} aria-hidden="true" />
    </>
  );
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  right: PropTypes.bool,
};

Feature.defaultProps = {
  right: false,
};

export default Feature;
