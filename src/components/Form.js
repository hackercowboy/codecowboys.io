import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ id, className, style }) => (
  <div id={id} className={[className, 'form'].filter((c) => c).join(' ')} style={style}>
    Form
  </div>
);

Form.propTypes = {
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

Form.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
};

export default Form;