import { colors, spacing, borderRadius, boxShadow, typography } from './tokens';

export const lightTheme = {
  name: 'light',
  borderRadius,
  spacing,
  boxShadow,
  typography,
  color: {
    ...colors,
    forground: colors.black,
    background: colors.white,
    primary: colors.blue,
    secondary: colors.yellow,
  },
  fonts: {
    family: 'Pretendard, sans-serif',
  },
};

export const darkTheme = {
  ...lightTheme,
  name: 'dark',
  color: {
    ...lightTheme.color,
    forground: colors.white,
    background: colors.black,
    primary: colors.red,
    secondary: colors.green,
  },
  boxShadow: {
    ...boxShadow,
    outerBorder: `0 0 0 2px ${colors.blue[200]}, 0 0 0 4px ${colors.blue[400]}`,
  },
};
