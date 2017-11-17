'use strict';

const _ = require('lodash');
const loopback = require('loopback');
const boot = require('loopback-boot');

const app = module.exports = loopback();

app.start = () => {
  return app.listen(() => {
    app.emit('Server started!');

    let baseUrl = app.get('url').replace(/\/$/, '');
    console.log(`Server running on ${baseUrl}`);

    if ( app.get('loopback-component-explorer') ) {
      let explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log(`REST API is located at ${baseUrl}${explorerPath}`);
    }
  });
}

boot(app, __dirname, (err) => {
  if ( err ) throw err;

  if ( require.main === module ) {
    app.start();
  }
});
