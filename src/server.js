import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import bodyParser from 'body-parser';
import { renderToString } from 'react-dom/server';
import { forceDomain } from 'forcedomain';
import compression from 'compression';

import i18n from './i18n';
import contact from './api/contact';
import Routes from './routes';
import layout from './layout';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable('x-powered-by')
  .use(forceDomain({
    hostname: process.env.CODECOWBOYS_HOSTNAME,
    protocol: 'https',
  }))
  .use(compression())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use(bodyParser.json())
  .post('/api/contact', contact.post)
  .get('/', (req, res) => {
    const language = req.acceptsLanguages('de', 'en') || 'en';
    res.redirect(`/${language}`);
  })
  .get('/*', (req, res) => {
    if (req.url.indexOf('/de') === 0) {
      i18n.changeLanguage('de');
    } else {
      i18n.changeLanguage('en');
    }
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <Routes />
      </StaticRouter>,
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(layout(assets, markup));
    }
  });

export default server;
