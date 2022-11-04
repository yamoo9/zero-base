import { merge } from 'webpack-merge';
import commonConfig from './common.js';
import serverConfig from './server.js';
import { createDotEnv } from './plugins/index.js';

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: serverConfig,
  plugins: [
    ...commonConfig.plugins,
    createDotEnv({ path: '.env/.dev' }),
  ].filter(Boolean),
});

export default devConfig;
