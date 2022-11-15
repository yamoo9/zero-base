import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import App from 'app/App';
import { StrictMode } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components/macro';

const colors = {
  white: '#fff',
  black: '#000',
  red: {
    100: 'hsl(0, 75%, 90%)',
    200: 'hsl(0, 75%, 80%)',
    300: 'hsl(0, 75%, 70%)',
    400: 'hsl(0, 75%, 60%)',
  },
  green: {
    100: 'hsl(120, 75%, 90%)',
    200: 'hsl(120, 75%, 80%)',
    300: 'hsl(120, 75%, 70%)',
    400: 'hsl(120, 75%, 60%)',
  },
};

const theme = {
  light: {
    bg: colors.white,
    fg: colors.black,
    primary: colors.red,
  },
  dark: {
    bg: colors.black,
    fg: colors.white,
    primary: colors.green,
  },
};

import('react-dom/client').then(({ createRoot }) => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <GlobalStyle />
      <ThemeProvider theme={theme.dark}>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
});

if (process.env.NODE_ENV.includes('production')) {
  import('./reportWebVitals').then(({ default: reportWebVitals }) =>
    reportWebVitals(console.table)
  );
}
