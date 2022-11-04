import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const createCleanup = (options = {}) => {
  const config = Object.assign(
    {
      verbose: true,
    },
    options
  );

  return new CleanWebpackPlugin(config);
};
