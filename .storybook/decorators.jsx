import { ThemeProvider } from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import { lightTheme, darkTheme } from '../src/styles/themes';

const withTheme = (StoryFn, context) => {
  const theme = context.parameters.theme ?? context.globals.theme;
  const storyTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyles />
      <StoryFn />
    </ThemeProvider>
  );
};

const globalDecorators = [withDesign, withTheme];

export default globalDecorators;
