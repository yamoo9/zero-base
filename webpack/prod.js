import { resolve } from 'node:path';
import { merge } from 'webpack-merge';
import commonConfig from './common.js';
import {
  createCopyPlugin,
  createCssExtractPlugin,
  createCssMinimizerPlugin,
  createTerserPlugin,
  createCleanPlugin,
  createImageMinPlugin,
  createBundleAnalyzerPlugin,
  createESBuildMinifyPlugin,
} from './plugins/index.js';

const prodConfig = merge(commonConfig, {
  mode: 'production',
  devtool: false,
  output: {
    ...commonConfig.output,
    path: resolve('build'),
    filename: '[name].[contenthash].min.js',
    chunkFilename: '[name].[contenthash].chunk.min.js',
  },
  plugins: [
    ...commonConfig.plugins,
    createCopyPlugin(),
    createCssExtractPlugin(),
    createBundleAnalyzerPlugin(),
  ].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [
      createTerserPlugin(),
      createCssMinimizerPlugin(),
      createCleanPlugin(),
      createImageMinPlugin(),
      createESBuildMinifyPlugin(),
    ],
    // splitChunks: {
    //   chunks: 'all',
    //   cacheGroups: {
    //     vendor: {
    //       name: 'vendor',
    //       chunks: 'initial',
    //       minChunks: 2,
    //     },
    //   },
    // },
  },
});

export default prodConfig;
