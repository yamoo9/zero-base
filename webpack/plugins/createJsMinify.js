import TerserPlugin from 'terser-webpack-plugin';

export const createJsMinify = (options = {}) => {
  const config = Object.assign({}, options);
  return new TerserPlugin(config);
};
