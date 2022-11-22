import styled from 'styled-components/macro';
import { Container } from '@/components';

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <small>COPYRIGHT ALL RIGHT RESERVED @ COMPANY</small>
      </Container>
    </StyledFooter>
  );
}

/* -------------------------------------------------------------------------- */

const StyledFooter = styled.footer`
  background: ${({ theme: { color } }) => color.primary[500]};
  padding: 40px 0;
`;
