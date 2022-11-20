import { css } from 'styled-components/macro';

const withBackground = (StoryFn) => (
  <div
    css={css`
      background: #fff;
      height: 100vh;
    `}
  >
    <StoryFn />
  </div>
);

export const globalDecorators = [withBackground];
