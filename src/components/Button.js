/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

function Button({
  id, type, disabled, children,
}) {
  return (
    <button id={id} type={type} disabled={disabled} className="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  id: undefined,
  type: 'submit',
  disabled: false,
  children: undefined,
};

export default Button;
