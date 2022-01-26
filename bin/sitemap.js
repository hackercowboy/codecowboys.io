/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const LAST_MODIFIED = new Date().toISOString();
const DOMAIN = 'https://codecowboys.io';

const PAGES = {
  '/': { de: '/de' },
  '/letter': { de: '/de/briefe' },
  '/imprint': { de: '/de/impressum' },
  '/privacy': { de: '/de/datenschutz' },
};

const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${Object.keys(PAGES).map((page) => `
      <url>
        <loc>${DOMAIN}${page}</loc>
        <lastmod>${LAST_MODIFIED}</lastmod>${Object.keys(PAGES[page]).map((lang) => `
        <xhtml:link
          rel="alternate"
          hreflang="${lang}"
          href="${DOMAIN}${PAGES[page][lang]}"/>
        `).join('\n')}
      </url>
    `).join('\n')}
    </urlset>
`;

const formattedSitemap = prettier.format(sitemap, { parser: 'html' });

fs.writeFileSync(path.resolve(path.join(__dirname, '../public/sitemap.xml')), formattedSitemap, 'utf8');
