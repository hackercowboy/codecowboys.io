/* istanbul ignore file */
/* eslint-disable import/no-relative-packages */
/* eslint-disable import/no-import-module-exports */
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';

import '../node_modules/react-image-gallery/styles/css/image-gallery.css';

import Main from './Main';

let language = 'en';

if (typeof window !== 'undefined' && window && window.location && window.location.pathname) {
  if (window.location.pathname.indexOf('/de') === 0) {
    language = 'de';
  }
}

hydrate(
  <BrowserRouter>
    <Main language={language} />
  </BrowserRouter>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
