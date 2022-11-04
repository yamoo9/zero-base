import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

export const createCssMinify = (options = {}) => {
  const config = Object.assign(
    {
      minimizerOptions: {
        preset: [
          'default',
          {
            discardComments: { removeAll: true },
          },
        ],
      },
    },
    options
  );
  return new CssMinimizerPlugin(config);
};
