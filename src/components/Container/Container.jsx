import styled from 'styled-components/macro';
import { number, string, bool, oneOf } from 'prop-types';

/* -------------------------------------------------------------------------- */

export const Container = styled.div.attrs(({ maxWidth, usingFlex }) => ({
  $mw: maxWidth,
  $uf: usingFlex,
}))`
  ${({ $uf }) =>
    $uf &&
    `
      display: flex;
      flex-flow: column wrap;
    `}
  max-width: ${({ $mw }) => ($mw ? `${$mw}px` : null)};
  margin-left: auto;
  margin-right: auto;
`;

Container.defaultProps = {
  maxWidth: 1440,
  usingFlex: true,
};

Container.propTypes = {
  maxWidth: number,
  usingFlex: bool,
};

/* -------------------------------------------------------------------------- */

Container.Headline = styled.h2.attrs(({ size, weight, color, background }) => ({
  $s: size,
  $w: weight,
  $c: color,
  $b: background,
}))`
  margin: 8px 0;
  font-size: ${({ $s }) => $s ?? '1.6rem'};
  font-weight: ${({ $w }) => ($w ? $w : null)};
  color: ${({ $c, theme }) => {
    return $c ? $c : theme.color.forground;
  }};
  background: ${({ $b }) => ($b ? $b : null)};
`;

Container.Headline.displayName = 'Headline';
Container.Headline.propTypes = {
  size: string,
  color: string,
  background: string,
  weight: oneOf([
    ...'lighten light normal bold border'.split(' '),
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
  ]),
};
