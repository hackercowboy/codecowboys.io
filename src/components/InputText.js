import React from 'react';
import PropTypes from 'prop-types';

import { Field, ErrorMessage } from 'formik';

import './InputText.scss';

const InputText = ({
  name, placeholder,
}) => (
  <div className="input-text">
    <Field
      type="text"
      name={name}
      placeholder={placeholder}
    />
    <ErrorMessage name={name} />
  </div>
);

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputText;
