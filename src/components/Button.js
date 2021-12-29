import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ id }) => (
  <div id={id}>
    Button
  </div>
);

Button.propTypes = {
  id: PropTypes.string,
};

Button.defaultProps = {
  id: undefined,
};

export default Button;
