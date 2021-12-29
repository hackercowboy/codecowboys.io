import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import ReactCookieConsent from 'react-cookie-consent';

import './CookieConsent.scss';

const CookieConsent = ({ intl }) => (
  <ReactCookieConsent
    location="bottom"
    buttonText={intl.formatMessage({ id: 'cookie_consent.dismiss' })}
    cookieName="codecowboys_consent"
  >
    {intl.formatMessage({ id: 'cookie_consent.message' })}
    {' '}
    <a href="https://www.cookiesandyou.com/">{intl.formatMessage({ id: 'cookie_consent.link' })}</a>
  </ReactCookieConsent>
);

CookieConsent.propTypes = {
  intl: PropTypes.shape({ formatMessage: PropTypes.func.isRequired }).isRequired,
};

export default injectIntl(CookieConsent);
