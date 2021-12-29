import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

const Form = ({ id, className, style }) => (
  <div id={id} className={[className, 'form'].filter((c) => c).join(' ')} style={style}>
    Form
  </div>
);

Form.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Form.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
};

export default Form;
