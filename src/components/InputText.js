import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'formik';
import ErrorMessage from './ErrorMessage';

function InputText({
  name, placeholder, disabled,
}) {
  return (
    <div className="input-text">
      <Field
        type="text"
        name={name}
        disabled={disabled}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} />
    </div>
  );
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
};

InputText.defaultProps = {
  disabled: false,
};

export default InputText;
