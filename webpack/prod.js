import { resolve } from 'node:path';
import { merge } from 'webpack-merge';
import commonConfig from './common.js';
import {
  createDotEnv,
  createCopyAssets,
  createCssFiles,
  createCssMinify,
  createJsMinify,
  createImageMinify,
  createCleanup,
  createBundleAnalyzer,
} from './plugins/index.js';

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
    createCopyAssets(),
    createCssFiles(),
    createBundleAnalyzer(),
  ].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [
      createCssMinify(),
      createJsMinify(),
      createImageMinify(),
      createCleanup(),
    ].filter(Boolean),
  },
});

export default prodConfig;
