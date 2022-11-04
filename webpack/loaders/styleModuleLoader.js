import { env } from 'node:process';
import { cssExtractLoader } from '../plugins/index.js';

let isDev = env.NODE_ENV.includes('development');

export const styleModuleLoader = {
  test: /\.module\.(css|s[ac]ss)/i,
  use: [
    isDev ? 'style-loader' : cssExtractLoader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2,
        modules: {
          localIdentName: '[folder]_[local]__[hash:base64:5]',
        },
      },
    },
    'postcss-loader',
    'sass-loader',
  ],
  include: /\.module\.(css|s[ac]ss)$/i,
};
