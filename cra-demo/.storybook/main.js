const { resolve } = require('node:path');

/** @type {import('@storybook/core-common').StorybookConfig} */
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  async webpackFinal(config, { configType }) {
    console.log(resolve(__dirname, '../src'));

    config.resolve.modules = [
      resolve(__dirname, '../src'),
      ...config.resolve?.modules,
    ];
    return config;
  },
};
