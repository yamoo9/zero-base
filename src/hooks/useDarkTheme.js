import useDarkMode from 'use-dark-mode';
import { lightTheme, darkTheme } from '@/styles/themes';

export function useDarkTheme() {
  const { value, enable, disable, toggle } = useDarkMode(false);
  const theme = value ? darkTheme : lightTheme;
  return { isDarkMode: value, theme, enable, disable, toggle };
}
