/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';

import CookieConsent from '../components/CookieConsent';

import messages from '../i18n';

import 'react-image-gallery/styles/css/image-gallery.css';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  const { locale, defaultLocale } = useRouter();

  const language = locale && locale.startsWith('de') ? 'de' : 'en';

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages[language]}
    >
      <CookieConsent />
      <Component {...pageProps} />
    </IntlProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
