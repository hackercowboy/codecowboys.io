import React from 'react';
import PropTypes from 'prop-types';

import { Field, ErrorMessage } from 'formik';

import './Textarea.scss';

const Textarea = ({
  name, placeholder,
}) => (
  <div className="textarea">
    <Field
      component="textarea"
      name={name}
      maxLength={4000}
      placeholder={placeholder}
    />
    <ErrorMessage name={name} />
  </div>
);

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Textarea;
