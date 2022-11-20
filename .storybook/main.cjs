const { mergeConfig } = require('vite');
const macrosPlugin = require('vite-plugin-babel-macros');

/** @type {import('@storybook/core-common').StorybookConfig} */
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    const { default: userConfig } = await import('../vite.config.js');

    return mergeConfig(config, {
      resolve: userConfig.resolve,
      plugins: userConfig.plugins.filter((_, i) => i > 0),
    });
  },
};
