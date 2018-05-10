import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './en/index';
import De from './de/index';

import Letter from './en/letter';
import Briefe from './de/letter';

import Privacy from './en/privacy';
import Datenschutz from './de/privacy';

import Imprint from './en/imprint';
import Impressum from './de/imprint';


const Routes = () => (
  <Switch>
    <Route path="/en/letter" component={Letter}/>
    <Route path="/en/privacy" component={Privacy}/>
    <Route path="/en/imprint" component={Imprint}/>
    <Route path="/en" component={En}/>
    <Route path="/de/briefe" component={Briefe}/>
    <Route path="/de/datenschutz" component={Datenschutz}/>
    <Route path="/de/impressum" component={Impressum}/>
    <Route path="/de" component={De}/>
    <Redirect to="/en"/>
  </Switch>
);

export default Routes;
