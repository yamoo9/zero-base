module.exports = {
  comments: false,
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true,
      },
    ],
    '@babel/preset-react',
  ],
};
