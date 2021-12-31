/* eslint-disable import/no-import-module-exports */
import http from 'http';
import app from './server';

const server = http.createServer(app);

let currentApp = app;

// eslint-disable-next-line no-eval
const port = eval('process.env.PORT') || 8080;

server.listen(port, (error) => {
  if (error) {
    console.log(error);
  }

  console.log(`🚀 started on port ${port}, let's rock!`);
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    const newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
