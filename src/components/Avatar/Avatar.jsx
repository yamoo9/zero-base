import { string } from 'prop-types';
import styled, { css } from 'styled-components';

export const Avatar = styled.img`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
  `}
  border-radius: 50%;
  border: 2px solid #636080;
  vertical-align: middle;
  filter: saturate(50%);
  transition: filter 0.4s ease-out;

  &:hover {
    filter: none;
  }
`;

Avatar.defaultProps = {
  size: 24,
};

Avatar.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
};
