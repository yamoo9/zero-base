import { useState } from 'react';
import styled from 'styled-components';
import { HeaderBar } from '@/components';
import { ThemeProvider, lightTheme, darkTheme } from '@/contexts/theme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const enableDarkMode = () => setIsDarkMode(true);
  const disableDarkMode = () => setIsDarkMode(false);
  const toggleDarkMode = () => setIsDarkMode(isDarkMode ? false : true);

  const themeValue = {
    currentTheme,
    name: isDarkMode ? 'dark' : 'light',
    enable: enableDarkMode,
    disable: disableDarkMode,
    toggle: toggleDarkMode,
  };

  return (
    <ThemeProvider value={themeValue}>
      <Container>
        <HeaderBar />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
`;
