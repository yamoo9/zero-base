const liveServer = require('live-server');
const getArgv = require('./helpers/getArgv');

const defaultParams = {
  host: 'localhost',
  port: 3000,
  root: './public',
  open: false,
};

const userParams = getArgv();

const params = Object.assign({}, defaultParams, userParams);

liveServer.start(params);

/* path.join() vs. path.resolve() ------------------------------------------- */

// console.log(join(process.cwd(), 'public/scripts/app.js'));
// console.log(resolve('public/scripts/app.js'));
