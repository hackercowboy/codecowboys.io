import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';

import './styles/bootstrap.css';
import '../node_modules/react-image-gallery/styles/css/image-gallery.css';
import './styles/commons.css';

import Routes from './routes';

hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
