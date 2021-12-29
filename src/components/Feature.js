import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'reactstrap';

import './Feature.scss';

const Feature = ({
  title, description, icon, right,
}) => (
  <Media className={right ? 'feature right' : 'feature'}>
    <Media body>
      <h4>{title}</h4>
      <p>{description}</p>
    </Media>
    <Media className="pull-right">
      <i className={`fal ${icon}`} aria-hidden="true" />
    </Media>
  </Media>
);

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
