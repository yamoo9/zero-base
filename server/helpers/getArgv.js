const { argv } = require('node:process');
const SEPERATOR = '=';

const getArgv = () =>
  Object.fromEntries(
    argv.slice(2).map((keyValue) => {
      keyValue = keyValue.replace(/--/g, '');
      return keyValue.includes(SEPERATOR)
        ? keyValue.split(SEPERATOR)
        : [keyValue, true];
    })
  );

module.exports = getArgv;
