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

const lightTheme = {
  forground: tokens.colors.black,
  background: tokens.colors.white,
  space: {
    md: tokens.space.base,
    lg: tokens.space.base * 2,
    xl: tokens.space.base * 4,
  },
};

export const ThemeContext = React.createContext({
  theme: lightTheme,
});
