import { withDesign } from 'storybook-addon-designs';
import { css } from 'styled-components/macro';

export const withMaxWidth = (StoryFn) => {
  return (
    <div
      css={css`
        max-width: 640px;
        padding: 20px;
        border: 3px solid darkcyan;
        box-shadow: 0 0 10px 2px rgba(0 0 0 / 20%);
      `}
    >
      <StoryFn />
    </div>
  );
};

export const withBackground = (StoryFn) => {
  return (
    <div
      css={css`
        background: darkcyan;
        color: #fff;
      `}
    >
      <h2>hi storybook 😃</h2>
      <StoryFn />
    </div>
  );
};

export const globalDecorators = [withDesign, withBackground, withMaxWidth];
