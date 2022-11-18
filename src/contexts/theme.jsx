import React from 'react';

const tokens = {
  colors: {
    white: '#fff',
    black: '#000',
  },
  space: {
    base: 4,
  },
};

const commonTheme = {
  space: {
    md: tokens.space.base,
    lg: tokens.space.base * 2,
    xl: tokens.space.base * 4,
  },
};

export const lightTheme = {
  forground: tokens.colors.black,
  background: tokens.colors.white,
  space: commonTheme.space,
};
export const darkTheme = {
  forground: tokens.colors.white,
  background: tokens.colors.black,
  space: commonTheme.space,
};

export const ThemeContext = React.createContext();

ThemeContext.displayName = 'Theme';
