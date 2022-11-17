const getUserParams = require('./_getUserParams');

module.exports = function getComponentParams() {
  return Object.fromEntries(
    Object.entries(getUserParams()).map(([key, value]) => {
      if (typeof value === 'boolean' && !key.includes('module')) {
        return ['name', key];
      }
      return [key, value];
    })
  );
};
