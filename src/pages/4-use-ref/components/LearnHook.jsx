import { useState } from 'react';
import styled, { css } from 'styled-components';
import { BinaryCalculator } from '@/components';

/* -------------------------------------------------------------------------- */

export function LearnHook() {
  const [expected, setExpected] = useState(3);

  return (
    <Container>
      <button
        css={css`
          color: #fff;
        `}
        onClick={() => setExpected(expected + 1)}
      >
        add expected
      </button>
      <BinaryCalculator numberOfButtons={expected} />
      <BinaryCalculator numberOfButtons={[true, false, false]} />
    </Container>
  );
}

/* -------------------------------------------------------------------------- */

const Container = styled.div``;
