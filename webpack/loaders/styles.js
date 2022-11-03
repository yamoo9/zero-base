export const styleLoaders = {
  test: /\.css$/i,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
};
