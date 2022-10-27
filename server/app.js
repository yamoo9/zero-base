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
