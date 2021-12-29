import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
    <div>
      <CookieConsent>
        <Switch>
          <Route path="/de/impressum" component={Impressum} exact />
          <Route path="/de/datenschutz" component={Datenschutz} exact />
          <Route path="/de/briefe" component={Letter} exact />
          <Route path="/de" component={Home} exact />
          <Route path="/en/imprint" component={Imprint} exact />
          <Route path="/en/privacy" component={Privacy} exact />
          <Route path="/en/letter" component={Letter} exact />
          <Route path="/en" component={Home} exact />
          <Route component={NotFound} />
        </Switch>
      </CookieConsent>
      <Footer />
    </div>
  </IntlProvider>
);

export default Routes;
