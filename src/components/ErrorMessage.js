import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage as FormikErrorMessage } from 'formik';

function ErrorMessage({ name }) {
  return (
    <div className="error-message">
      <FormikErrorMessage name={name} />
    </div>
  );
}

ErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ErrorMessage;
