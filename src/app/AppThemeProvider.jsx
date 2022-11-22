import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components/macro';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { ThemeToggler } from '@/components';
import { useDarkTheme } from '@/hooks';

/* -------------------------------------------------------------------------- */

ThemeProvider.displayName = 'Theme';

/* -------------------------------------------------------------------------- */

export default function AppThemeProvider({ children }) {
  const { isDarkMode, theme, toggle } = useDarkTheme();

  let label = isDarkMode ? '라이트 모드 전환' : '다크 모드 전환';

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
      <ThemeToggler onClick={toggle} title={label} aria-label={label}>
        {isDarkMode ? '☀' : '☾'}
      </ThemeToggler>
    </ThemeProvider>
  );
}

AppThemeProvider.propTypes = {
  children: node,
};
