export default (assets, markup) => `
<!doctype html>
  <html lang="">
  <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charset="utf-8" />
      <title>Code Cowboys</title>
      <link href='https://fonts.googleapis.com/css?family=Noto+Serif' rel='stylesheet' type='text/css'>
      <link href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' type='text/css'>
      <script src='https://www.google.com/recaptcha/api.js'></script>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css" />
      <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script>
      <script>
      window.addEventListener("load", function(){
      window.cookieconsent.initialise({
        "palette": {
          "popup": {
            "background": "#237afc",
          },
          "button": {
            "background": "#eee",
            "text": "#237afc"
          }
        },
        "showLink": false,
        "theme": "edgeless",
        "content": {
          "message": "This website uses cookies to ensure you get the best experience.",
          "dismiss": "Got it!"
        }
      })});
      </script>
      ${assets.client.css
    ? `<link rel="stylesheet" href="${assets.client.css}">`
    : ''}
      ${process.env.NODE_ENV === 'production'
    ? `<script src="${assets.client.js}" defer></script>`
    : `<script src="${assets.client.js}" defer crossorigin></script>`}
  </head>
  <body>
      <div id="root">${markup}</div>
      <div class="footer">© 2018 David Übelacker, all rights reserved.</div>
  </body>
</html>
`.trim();
