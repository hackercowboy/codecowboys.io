import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, className, style }) => (
  <div id={id} className={[className, 'button'].filter((c) => c).join(' ')} style={style}>
    Button
  </div>
);

Button.propTypes = {
  /**
  * Unique id of the component
  */
  id: PropTypes.string,
  /**
  * Additional class name to be added
  */
  className: PropTypes.string,
  /**
   * Custom styles
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Button.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
};

export default Button;