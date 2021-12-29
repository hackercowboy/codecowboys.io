import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Home from './pages/Home';
import Letter from './pages/Letter';
import Imprint from './pages/en/Imprint';
import Privacy from './pages/en/Privacy';
import Impressum from './pages/de/Impressum';
import Datenschutz from './pages/de/Datenschutz';
import NotFound from './pages/NotFound';

import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import { language, messages } from './i18n';

const Routes = () => (
  <IntlProvider locale={language} defaultLocale="en" messages={messages}>
    <>
      <CookieConsent/>
      <ReactRoutes>
        <Route path="/de/impressum" element={<Impressum/>}/>
        <Route path="/de/datenschutz" element={<Datenschutz/>}/>
        <Route path="/de/briefe" element={<Letter/>}/>
        <Route path="/de" element={<Home/>}/>
        <Route path="/en/imprint" element={<Imprint/>}/>
        <Route path="/en/privacy" element={<Privacy/>}/>
        <Route path="/en/letter" element={<Letter/>}/>
        <Route path="/en" element={<Home/>} />
        <Route element={<NotFound/>} />
      </ReactRoutes>
      <Footer />
    </>
  </IntlProvider>
);

export default Routes;
