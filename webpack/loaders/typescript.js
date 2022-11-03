export const typeScriptLoader = {
  test: /\.tsx?$/i,
  use: {
    loader: 'ts-loader',
    options: {
      compilerOptions: {
        noEmit: false,
      },
    },
  },
  exclude: /node_modules/,
};
