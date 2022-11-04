import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const createBundleAnalyzerPlugin = (options = {}) => {
  const config = Object.assign(
    {
      openAnalyzer: true,
      generateStatsFile: true,
    },
    options
  );
  return new BundleAnalyzerPlugin(config);
};
