import React from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import ErrorMessage from './ErrorMessage';

import './Captcha.scss';

function Captcha({ name, onChange }) {
  return (
    <div className="captcha">
      <ReCAPTCHA
        sitekey="6LfLbVcUAAAAAArYaqxljRPHc7ht-QxUeznHOCgN"
        onChange={onChange}
      />
      <ErrorMessage name={name} />
    </div>
  );
}

Captcha.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Captcha;
