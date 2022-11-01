import { merge } from 'webpack-merge';
import commonConfig from './common.js';

const devConfig = merge(commonConfig, {
  mode: 'development',
});

export default devConfig;
