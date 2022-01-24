import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'formik';
import ErrorMessage from './ErrorMessage';

function Checkbox({
  name, disabled, children,
}) {
  return (
    <div className="checkbox">
      <div className="checkbox-wrapper">
        <Field
          type="checkbox"
          id={name}
          name={name}
          disabled={disabled}
        />
        <label htmlFor={name}>
          {children}
        </label>
      </div>
      <ErrorMessage name={name} />
    </div>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Checkbox.defaultProps = {
  disabled: false,
};

export default Checkbox;
