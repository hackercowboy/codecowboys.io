// next.config.js
const withMDX = require('@next/mdx')();

module.exports = withMDX({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
  pageExtensions: ['page.js', 'page.mdx'],
});
