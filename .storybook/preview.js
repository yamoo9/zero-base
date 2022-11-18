import { globalDecorators } from './decorators';
import { themes } from '@storybook/theming';

export const parameters = {
  docs: {
    theme: themes.light,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = globalDecorators;
