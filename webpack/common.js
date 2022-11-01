import { resolve } from 'node:path';

const commonConfig = {
  target: ['browserslist'],
  entry: {
    main: resolve('src/main.js'),
  },
  output: {
    path: resolve('public'),
    filename: '[name].bundle.js',
  },
};

export default commonConfig;
