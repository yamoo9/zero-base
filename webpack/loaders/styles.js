export const styleLoaders = {
  test: /\.(css|s[ac]css)$/i,
  exclude: /\.module\.(css|s[ac]css)$/i,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2,
      },
    },
    'postcss-loader',
    'sass-loader',
  ],
};
