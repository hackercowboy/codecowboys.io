export default (assets, markup) => `
<!doctype html>
  <html lang="">
  <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charset="utf-8" />
      <title>codecowboys</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" media="all" rel="stylesheet" crossorigin="anonymous" async defer>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.0.13/css/all.css" media="all" crossorigin="anonymous" async defer>
      <script src='https://www.google.com/recaptcha/api.js' async defer></script>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${assets.client.css
    ? `<link rel="stylesheet" href="${assets.client.css}" async defer>`
    : ''}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119498871-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-119498871-1', { 'anonymize_ip': true });
    </script>

  </head>
  <body>
      <div id="root">${markup}</div>
      ${process.env.NODE_ENV === 'production'
    ? /* istanbul ignore next */ `<script src="${assets.client.js}" defer async></script>`
    : `<script src="${assets.client.js}" defer crossorigin async></script>`}
  </body>
</html>
`.trim();
