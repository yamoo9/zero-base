import styled from 'styled-components/macro';
import { Container, HomeLink } from '@/components';

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <HomeLink scale={0.4} />
      </Container>
    </StyledHeader>
  );
}

/* -------------------------------------------------------------------------- */

const StyledHeader = styled.header`
  background: ${({ theme: { color } }) => color.primary[500]};
  padding: 40px 0;
`;
