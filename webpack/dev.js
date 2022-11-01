import { merge } from 'webpack-merge';
import commonConfig from './common.js';
import serverConfig from './server.js';

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: serverConfig,
});

export default devConfig;
