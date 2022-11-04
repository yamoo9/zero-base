import { resolve } from 'node:path';
import { merge } from 'webpack-merge';
import commonConfig from './common.js';
import { createDotEnv } from './plugins/index.js';

const prodConfig = merge(commonConfig, {
  mode: 'production',
  output: {
    ...commonConfig.output,
    path: resolve('build'),
    filename: '[contenthash].min.js',
  },
  plugins: [
    ...commonConfig.plugins,
    createDotEnv({ path: '.env/.prod' }),
  ].filter(Boolean),
});

export default prodConfig;
