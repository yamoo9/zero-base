import { resolve } from 'node:path';
import { merge } from 'webpack-merge';
import commonConfig from './common.js';

const prodConfig = merge(commonConfig, {
  mode: 'production',
  output: {
    ...commonConfig.output,
    path: resolve('build'),
  },
});

export default prodConfig;
