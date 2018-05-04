import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';

import './styles/bootstrap.css';
import './styles/commons.css';

import Routes from './routes/index';

hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
