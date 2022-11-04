import { resolve } from 'node:path';
import { createDotEnvPlugin, createHtmlPlugin } from './plugins/index.js';
import {
  assetsLoader,
  svgrLoader,
  // babelLoader,
  // tsLoader,
  esbuildLoader,
  tsEsbuildLoader,
  styleLoader,
  styleModuleLoader,
} from './loaders/index.js';

const commonConfig = {
  target: 'browserslist',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.wasm'],
    alias: {
      '@': resolve('src'),
    },
  },
  entry: {
    main: {
      import: resolve('src/index.jsx'),
      dependOn: ['vendor'],
    },
    // sub: {
    //   import: resolve('src/sub.tsx'),
    //   dependOn: ['vendor.react', 'vendor.react-dom'],
    // },
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    assetModuleFilename: 'static/[name].[contenthash][ext][query]',
  },
  module: {
    rules: [
      // babelLoader,
      // tsLoader,
      esbuildLoader,
      tsEsbuildLoader,
      styleLoader,
      styleModuleLoader,
      assetsLoader,
      svgrLoader,
    ],
  },
  plugins: [createDotEnvPlugin(), createHtmlPlugin()].filter(Boolean),
};

export default commonConfig;
