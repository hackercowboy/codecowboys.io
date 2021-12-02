import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ id, className, style }) => (
  <div id={id} className={[className, 'button'].filter((c) => c).join(' ')} style={style}>
    Button
  </div>
);

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Button.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
};

export default Button;
