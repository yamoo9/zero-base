export const styleModulesLoader = {
  test: /\.module\.(css|s[ac]ss)$/i,
  include: /\.module\.(css|s[ac]ss)$/i,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2,
        modules: {
          localIdentName: '[folder]_[local]__[hash:base64:5]',
        },
      },
    },
    'postcss-loader',
    'sass-loader',
  ],
};
