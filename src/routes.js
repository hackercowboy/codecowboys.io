import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import Home from './pages/Home';
import i18n from './i18n';

class LocationListener extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    this.handleLocationChange(this.context.router.history.location);
    this.unlisten = this.context.router.history.listen(this.handleLocationChange);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleLocationChange(location) {
    if (location.pathname.indexOf('/de') === 0) {
      i18n.changeLanguage('de');
    } else {
      i18n.changeLanguage('en');
    }
  }

  render() {
    return this.props.children;
  }
}

const Routes = () => (
  <I18nextProvider i18n={i18n}>
    <Switch>
      <LocationListener>
        <Route path="/de" component={Home}/>
        <Route path="/en" component={Home}/>
      </LocationListener>
    </Switch>
  </I18nextProvider>
);

export default Routes;
