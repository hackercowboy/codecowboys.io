/* istanbul ignore file */
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import express from 'express';
import bodyParser from 'body-parser';
import { renderToString } from 'react-dom/server';
import { forceDomain } from 'forcedomain';
import compression from 'compression';

import contact from './api/contact';
import Main from './Main';
import layout from './layout';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable('x-powered-by')
  .use(forceDomain({
    hostname: process.env.CODECOWBOYS_HOSTNAME,
    protocol: 'https',
    excludeRule: /lvh\.me/i,
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
    const context = {};
    const language = req.acceptsLanguages('de', 'en') || 'en';
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <Main language={language} />
      </StaticRouter>,
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(layout(assets, markup));
    }
  });

export default server;
