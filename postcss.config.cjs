module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        stage: 2,
        autoprefixer: { grid: true },
        features: {
          'nesting-rules': true,
          'custom-selectors': true,
        },
      },
    ],
  ],
};
