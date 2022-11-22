import { createGlobalStyle, css } from 'styled-components/macro';
import { resetCSS } from './CSSReset';

export const GlobalStyles = createGlobalStyle(
  ({ theme: { color, typography, fonts, borderRadius } }) => {
    return css`
      ${resetCSS}

      :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
      }

      body {
        margin: 0;
        background: ${color.background};
        color: ${color.forground};
        font: 1rem/1.5 ${fonts.family};
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      a {
        font-weight: ${typography.fontWeight.medium};
        color: ${color.primary[400]};
        text-decoration: inherit;

        &:hover {
          color: ${color.primary[600]};
        }
      }

      h1 {
        font-size: ${typography.fontSize.heading1};
        line-height: 1.1;
      }

      button {
        border-radius: ${borderRadius.s};
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: ${typography.fontWeight.medium};
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
        &:hover {
          border-color: ${color.primary[600]};
        }
        &:focus,
        &:focus-visible {
          outline: 4px auto -webkit-focus-ring-color;
        }
      }
    `;
  }
);
