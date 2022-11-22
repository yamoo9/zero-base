import { number } from 'prop-types';
import { css } from 'styled-components';

export function HomeLink({ ...restProps }) {
  return (
    <h1
      css={css`
        display: inline-flex;
        margin: 0;
        font-size: 1.2rem;
      `}
      {...restProps}
    >
      <a
        href="/"
        css={css`
          display: block;
          color: ${({ theme: { color } }) => color.forground};
          font-weight: 700;
          padding: 0.4em;
          text-transform: uppercase;
        `}
      >
        React hooks
      </a>
    </h1>
  );
}

HomeLink.defaultProps = {
  scale: 1,
};

HomeLink.propTypes = {
  scale: number,
};
