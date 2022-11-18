import { useState, createContext, Component as ReactComponent } from 'react';

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

const ThemeContext = createContext();
ThemeContext.displayName = 'Theme';

export const ThemeProvider = ({ ...restProps }) => {
  const [theme, setTheme] = useState(lightTheme);
  const themeValue = {
    theme,
    changeTheme: setTheme,
  };

  return <ThemeContext.Provider value={themeValue} {...restProps} />;
};

export function withTheme(Component) {
  return class WithThemeHOC extends ReactComponent {
    static contextType = ThemeContext;
    render() {
      return <Component themeValue={this.context} {...this.props} />;
    }
  };
}
