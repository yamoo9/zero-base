import styled, { css } from 'styled-components/macro';

export const ThemeToggler = styled.button.attrs((props) => ({
  type: 'button',
  $color: props.theme.color,
}))`
  ${({ $color }) => css`
    background: transparent;
    color: ${$color.forground};
    &:focus-visible {
      box-shadow: inset 0 0 0 2px ${$color.forground};
    }
  `};

  position: fixed;
  z-index: 10000;
  top: 35px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  font-size: 1.4rem;
`;
