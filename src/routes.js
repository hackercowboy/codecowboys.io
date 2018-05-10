import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import Home from './pages/Home';
import i18n from './i18n';

const Routes = () => (
  <Switch>
    <I18nextProvider i18n={i18n} initialLanguage="de">
      <Route path="/de" component={Home}/>
    </I18nextProvider>
    <I18nextProvider i18n={i18n} initialLanguage="en">
      <Route path="/en" component={Home}/>
    </I18nextProvider>
  </Switch>
);

export default Routes;
