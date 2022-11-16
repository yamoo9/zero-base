const { argv } = require('node:process');

module.exports = function getUserParams() {
  return Object.fromEntries(
    argv.slice(2).map((keyValue) => {
      let [key, value] = keyValue.split('=');
      return [key.replace(/--/, ''), value ?? true];
    })
  );
}