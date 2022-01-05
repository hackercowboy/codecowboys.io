import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'formik';

import ErrorMessage from './ErrorMessage';
import './Textarea.scss';

function Textarea({
  name, placeholder, disabled,
}) {
  return (
    <div className="textarea">
      <Field
        component="textarea"
        name={name}
        disabled={disabled}
        maxLength={4000}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} />
    </div>
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
};

Textarea.defaultProps = {
  disabled: false,
};

export default Textarea;
