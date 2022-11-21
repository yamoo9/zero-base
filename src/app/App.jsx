import useDarkMode from 'use-dark-mode';
import styled, { css, ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/themes';

// import { BinaryCalculator } from '@/components';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { useFetch } from '@/hooks/useFetch';
import { useMouse } from '@/hooks/useMouse';

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

function App() {
  const mouse = useMouse();
  console.log(mouse);

  const { value, toggle } = useDarkMode(false);

  const state1 = useFetch('https://jsonplaceholder.typicode.com/users/2');

  const state2 = useFetch('https://jsonplaceholder.typicode.com/users/5');

  console.log({ state1, state2 });

  const theme = value ? darkTheme : lightTheme;

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ThemeToggleButton onClick={toggle}>
          {value ? '☾' : '☀'}
        </ThemeToggleButton>
        {/* <BinaryCalculator numberOfButtons={6} /> */}
      </ThemeProvider>
    </Container>
  );
}

export default App;

/* -------------------------------------------------------------------------- */
/* Styled Components                                                          */
/* -------------------------------------------------------------------------- */

const Container = styled.div`
  min-height: 100vh;
`;

const ThemeToggleButton = styled.button.attrs((props) => ({
  type: 'button',
  $color: props.theme.color,
}))`
  ${({ $color }) => css`
    background: ${$color.background};
    color: ${$color.forground};
    &:focus-visible {
      box-shadow: inset 0 0 0 2px ${$color.forground};
    }
  `};

  position: fixed;
  z-index: 10000;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;
