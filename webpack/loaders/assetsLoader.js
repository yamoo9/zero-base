export const assetsLoader = {
  test: /\.(jpe?g|png|gif|webp|bmp)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'static/[name].[contenthash][ext][query]',
  },
  parser: {
    dataUrlCondition: 8 * 1024, // 8kb
  },
};

export const svgrLoader = {
  test: /\.svg$/i,
  oneOf: [
    {
      dependency: { not: ['url'] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            titleProp: true,
            svgo: true,
          },
        },
        'new-url-loader',
      ],
    },
    {
      type: 'asset/resource',
      generator: {
        filename: 'static/[name].[hash][ext][query]',
      },
      parser: {
        dataUrlCondition: 4 * 1024,
      },
    },
  ],
};
