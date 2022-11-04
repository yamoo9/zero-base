import { resolve } from 'node:path';
import {
  babelLoader,
  typeScriptLoader,
  styleLoaders,
  styleModulesLoader,
  assetsLoader,
  svgAssetsLoader,
} from './loaders/index.js';

import { createHtmlTemplate } from './plugins/index.js';

const commonConfig = {
  target: ['browserslist'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.wasm'],
    alias: {
      '@': resolve('src'),
    },
  },
  entry: {
    main: resolve('src/main.jsx'),
  },
  output: {
    path: resolve('public'),
    filename: '[name].[contenthash].bundle.js',
  },
  module: {
    rules: [
      babelLoader,
      typeScriptLoader,
      styleLoaders,
      styleModulesLoader,
      assetsLoader,
      svgAssetsLoader,
    ],
  },
  plugins: [createHtmlTemplate()].filter(Boolean),
};

export default commonConfig;
