import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ id, className, style }) => (
  <div id={id} className={[className, 'text-input'].filter((c) => c).join(' ')} style={style}>
    TextInput
  </div>
);

TextInput.propTypes = {
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

TextInput.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
};

export default TextInput;