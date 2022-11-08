const { cwd } = require('node:process');

module.exports = function removeCwdPath(path) {
  return path.replace(cwd(), '');
}