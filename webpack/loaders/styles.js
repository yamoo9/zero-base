import { env } from 'node:process';
import { cssExtractLoader } from '../plugins/index.js';

let isDev = env.NODE_ENV.includes('development');

export const styleLoaders = {
  test: /\.(css|s[ac]css)$/i,
  exclude: /\.module\.(css|s[ac]css)$/i,
  use: [
    isDev ? 'style-loader' : cssExtractLoader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2,
      },
    },
    'postcss-loader',
    'sass-loader',
  ],
};
