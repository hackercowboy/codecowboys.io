/* eslint-disable import/no-relative-packages */
/* eslint-disable import/no-import-module-exports */
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';

import '../node_modules/react-image-gallery/styles/css/image-gallery.css';

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
