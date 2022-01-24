import React from 'react';
import PropTypes from 'prop-types';

import { Form as FormikForm } from 'formik';

function Form({ children }) {
  return (
    <div className="form-wrapper">
      <FormikForm className="test">
        {children}
      </FormikForm>
    </div>
  );
}

Form.propTypes = {
  children: PropTypes.node,
};

Form.defaultProps = {
  children: undefined,
};

export default Form;
