import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import loadable from '@loadable/component';
import configuration from './configuration';

import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import messages from './i18n';

import './styles/base.scss';

const Home = loadable(/* istanbul ignore next */() => import('./pages/Home'));
const Letter = loadable(/* istanbul ignore next */() => import('./pages/Letter'));
const Imprint = loadable(/* istanbul ignore next */() => import('./pages/en/Imprint'));
const Privacy = loadable(/* istanbul ignore next */() => import('./pages/en/Privacy'));
const Impressum = loadable(/* istanbul ignore next */() => import('./pages/de/Impressum'));
const Datenschutz = loadable(/* istanbul ignore next */() => import('./pages/de/Datenschutz'));
const NotFound = loadable(/* istanbul ignore next */() => import('./pages/NotFound'));

function Main({ language }) {
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (['Space', 'PageDown', 'PageUp'].indexOf(event.code) >= 0) {
        event.preventDefault();
      }
    });
  }, []);

  return (
    <IntlProvider locale={language} defaultLocale="en" messages={messages[language]}>
      <GoogleReCaptchaProvider reCaptchaKey={configuration.RECAPTCHA_SITE_KEY}>
        <>
          <CookieConsent />
          <Routes>
            <Route path="/de/impressum" element={<Impressum />} />
            <Route path="/de/datenschutz" element={<Datenschutz />} />
            <Route path="/de/briefe" element={<Letter />} />
            <Route path="/de" element={<Home />} />
            <Route path="/en/imprint" element={<Imprint />} />
            <Route path="/en/privacy" element={<Privacy />} />
            <Route path="/en/letter" element={<Letter />} />
            <Route path="/en" element={<Home />} />
            <Route element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      </GoogleReCaptchaProvider>
    </IntlProvider>
  );
}

Main.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Main;
