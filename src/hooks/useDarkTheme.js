import useDarkMode from 'use-dark-mode';
import { lightTheme, darkTheme } from '@/styles/themes';

export function useDarkTheme(initialValue = false) {
  const { value, enable, disable, toggle } = useDarkMode(initialValue);
  const theme = value ? darkTheme : lightTheme;
  return { isDarkMode: value, theme, enable, disable, toggle };
}
