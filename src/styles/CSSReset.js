import { css } from 'styled-components';

export const resetCSS = css`
  *,
  *::before,
  *::after {
    position: relative;
    min-height: 0;
    background-position: center center;
    background-repeat: no-repeat;
  }

  body {
    text-align: left;
    text-align: start;
  }

  button,
  input,
  select,
  textarea {
    border-radius: 0;
    background-color: transparent;
    font: inherit;
    text-align: inherit;
    text-transform: inherit;
    letter-spacing: inherit;
  }

  select option {
    background-color: white;
    color: black;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 0;
  }

  svg:not(:root) {
    overflow: visible;
  }

  small {
    font-size: inherit;
  }

  cite,
  var,
  address,
  dfn {
    font-style: inherit;
  }

  th,
  td {
    padding: 0;
  }

  th {
    font-weight: inherit;
    text-align: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;
