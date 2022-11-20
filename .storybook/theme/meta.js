import { create } from '@storybook/theming';
import metaLogo from '../public/meta.png';
import metaDarkLogo from '../public/meta-dark.png';

const colors = {
  forground: '#f9f9f9',
  background: '#232323',
  white: '#fff',
  black: '#000',
  gray: {
    100: '#e7e7e7',
    200: '#cfcfcf',
    300: '#b8b8b8',
    400: '#a0a0a0',
    500: '#888888',
    600: '#6d6d6d',
    700: '#525252',
    800: '#363636',
    900: '#1b1b1b',
  },
  blue: {
    100: '#f3faff',
    200: '#dceeff',
    300: '#84c2ff',
    400: '#3597f9',
    500: '#027df7',
    600: '#0264c6',
    700: '#014b94',
    800: '#013263',
    900: '#001931',
  },
  teal: {
    100: '#eefafd',
    200: '#c0edf8',
    300: '#6edefa',
    400: '#3ed3f8',
    500: '#0ec8f6',
    600: '#0ba0c5',
    700: '#087894',
    800: '#065062',
    900: '#032831',
  },
};

const lightTheme = {
  base: 'light',

  brandTitle: 'Meta 유니버스',
  brandUrl: 'https://about.meta.com/ko/meta/',
  brandImage: `/${metaLogo}`,
  brandTarget: '_blank',

  colorPrimary: colors.blue[600],
  colorSecondary: colors.blue[500],

  appBg: colors.blue[100],
  appContentBg: colors.white,
  appBorderColor: colors.gray[100],
  appBorderRadius: 8,

  fontBase: '"Pretendard", "Open Sans", sans-serif',
  fontCode: 'monospace',

  textColor: colors.blue[900],
  textInverseColor: 'rgba(255,255,255,0.9)',

  barTextColor: colors.gray[400],
  barSelectedColor: colors.blue[500],
  barBg: colors.white,

  inputBg: colors.blue[100],
  inputBorder: colors.blue[200],
  inputTextColor: colors.blue[900],
  inputBorderRadius: 2,
};

const darkTheme = {
  ...lightTheme,

  brandImage: `/${metaDarkLogo}`,

  colorPrimary: colors.blue[600],
  colorSecondary: colors.blue[500],

  appBg: colors.blue[900],
  appContentBg: colors.white,
  appBorderColor: colors.gray[600],
  appBorderRadius: 8,

  textColor: colors.blue[400],

  barTextColor: colors.blue[400],
  barSelectedColor: colors.blue[500],
  barBg: colors.blue[900],

  inputBg: colors.blue[100],
  inputBorder: colors.blue[200],
  inputTextColor: colors.blue[800],
  inputBorderRadius: 4,
};

export const meta = {
  light: create(lightTheme),
  dark: create(darkTheme),
};
