export const assetsLoader = {
  test: /\.(jpe?g|png|gif|webp|bmp)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'static/[name].[contenthash][ext][query]',
  },
};
