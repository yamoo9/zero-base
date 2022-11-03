import { resolve } from 'node:path';
import {
  babelLoader,
  typeScriptLoader,
  styleLoaders,
} from './loaders/index.js';

const commonConfig = {
  target: ['browserslist'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.wasm'],
  },
  entry: {
    main: resolve('src/main.jsx'),
    // app: resolve('src/index.tsx'),
  },
  output: {
    path: resolve('public'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [babelLoader, typeScriptLoader, styleLoaders],
  },
};

export default commonConfig;
