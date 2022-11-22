import styled from 'styled-components';
import { Counter } from '@/components';

/* -------------------------------------------------------------------------- */

export function LearnHook() {
  return (
    <Container>
      <Counter count={10} step={2} />
    </Container>
  );
}

/* -------------------------------------------------------------------------- */

const Container = styled.div``;
