import { resolve } from 'node:path';
import { babelLoader } from './loaders/index.js';

const commonConfig = {
  target: ['browserslist'],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm'],
  },
  entry: {
    main: resolve('src/main.jsx'),
  },
  output: {
    path: resolve('public'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [babelLoader],
  },
};

export default commonConfig;
