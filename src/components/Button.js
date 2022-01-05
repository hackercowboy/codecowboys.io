/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

function Button({
  type, disabled, children,
}) {
  return (
    <button type={type} disabled={disabled} className="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'submit',
  disabled: false,
  children: undefined,
};

export default Button;
