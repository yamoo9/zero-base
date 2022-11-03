export const styleModulesLoader = {
  test: /\.module\.s?[ac]ss$/i,
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
  include: /\.module\.s?[ac]ss$/i,
};
