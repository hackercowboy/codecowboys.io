import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import Home from './pages/Home';
import Letter from './pages/Letter';
import Imprint from './pages/en/Imprint';
import Privacy from './pages/en/Privacy';
import Impressum from './pages/de/Impressum';
import Datenschutz from './pages/de/Datenschutz';
import NotFound from './pages/NotFound';

import Footer from './components/Footer';
import i18n from './i18n';

class CookieConsent extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    if (window) {
      window.cookieconsent.initialise({
        position: 'bottom',
        theme: 'edgeless',
        content: {
          message: i18n.t('cookie_consent.message'),
          link: i18n.t('cookie_consent.link'),
          dismiss: i18n.t('cookie_consent.dismiss'),
        },
      });
    }
  }

  render() {
    return this.props.children;
  }
}

const Routes = () => (
  <I18nextProvider i18n={i18n}>
    <div>
      <CookieConsent>
        <Switch>
          <Route path="/de/impressum" component={Impressum} exact/>
          <Route path="/de/datenschutz" component={Datenschutz} exact/>
          <Route path="/de/briefe" component={Letter} exact/>
          <Route path="/de" component={Home} exact/>
          <Route path="/en/imprint" component={Imprint} exact/>
          <Route path="/en/privacy" component={Privacy} exact/>
          <Route path="/en/letter" component={Letter} exact/>
          <Route path="/en" component={Home} exact/>
          <Route component={NotFound}/>
        </Switch>
      </CookieConsent>
      <Footer/>
    </div>
  </I18nextProvider>
);

export default Routes;
