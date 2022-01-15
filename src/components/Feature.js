import React from 'react';
import PropTypes from 'prop-types';

import './Feature.scss';

function Feature({
  title, description, icon,
}) {
  return (
    <div className="feature">
      <div className="feature-wrapper">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="feature-icon">
        <i className={`fal ${icon}`} aria-hidden="true" />
      </div>
    </div>
  );
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Feature;
