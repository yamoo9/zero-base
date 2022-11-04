import CopyPlugin from 'copy-webpack-plugin';

export const createCopyAssets = (options = {}) => {
  const config = Object.assign(
    {
      patterns: [{ from: 'public/assets', to: 'static' }],
    },
    options
  );

  return new CopyPlugin(config);
};
