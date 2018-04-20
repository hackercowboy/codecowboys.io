import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import En from './en/index';
import De from './de/index';

import Letter from './en/letter';
import Briefe from './de/letter';

const Routes = () => (
  <Switch>
    <Route path="/en/letter" component={Letter}/>
    <Route path="/en" component={En}/>
    <Route path="/de/briefe" component={Briefe}/>
    <Route path="/de" component={De}/>
    <Redirect to="/en"/>
  </Switch>
);

export default Routes;
