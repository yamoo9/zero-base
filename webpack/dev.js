import { merge } from 'webpack-merge';
import devServer from './server.js';
import commonConfig from './common.js';

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer,
});

export default devConfig;
