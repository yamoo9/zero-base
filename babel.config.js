module.exports = {
  comments: false,
  presets: [
    [
      '@babel/preset-env',
      {
        modules: process.env.BABEL_MODULES ?? false,
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
  plugins: ['@babel/plugin-syntax-import-assertions'],
};
