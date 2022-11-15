import styled from 'styled-components/macro';
import { A11yHidden } from 'components';
import { getAsset } from 'utils';

/* -------------------------------------------------------------------------- */
/* component                                                                  */
/* -------------------------------------------------------------------------- */

export function Banner({
  as: ComponentName,
  url,
  className,
  width,
  height,
  style,
  children,
  ...restProps
}) {
  return (
    <StyledContainer
      as={ComponentName}
      className={className}
      style={{
        width,
        height,
        ...style,
      }}
      {...restProps}
    >
      <StyledImage alt="" src={getAsset(url)} width={width} height={height} />
      <A11yHidden as="figcaption">{children}</A11yHidden>
    </StyledContainer>
  );
}

/* -------------------------------------------------------------------------- */
/* component props                                                            */
/* -------------------------------------------------------------------------- */

Banner.defaultProps = {
  as: 'figure',
  width: 374,
  height: 800,
};

Banner.propTypes = {};

/* -------------------------------------------------------------------------- */
/* styled components                                                          */
/* -------------------------------------------------------------------------- */

const StyledContainer = styled.div`
  margin: 0;
  background-size: cover;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;
