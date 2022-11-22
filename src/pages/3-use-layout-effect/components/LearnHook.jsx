import { useState, useEffect, useLayoutEffect } from 'react';
import styled, { css } from 'styled-components';

/* -------------------------------------------------------------------------- */

export function LearnHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('mounted: call effect function');
    return () => console.log('mounted -> cleanup: call effect function');
  }, []);

  useLayoutEffect(() => {
    console.log('mounted: call layout effect function');
    return () => console.log('mounted -> cleanup: call effect function');
  }, []);

  useEffect(() => {
    console.log('updated: call effect function');
    return () => console.log('updated -> cleanup: call effect function');
  });

  useLayoutEffect(() => {
    console.log('updated: call layout effect function');
    return () => console.log('updated -> cleanup: call layout effect function');
  });

  return (
    <Container lang="en">
      <button
        type="button"
        css={css`
          display: block;
          margin-bottom: 10px;
          color: ${({ theme: { color } }) => color.white};
        `}
        onClick={() => setCount(count + 1)}
      >
        count up
      </button>
      useEffect vs. useLayoutEffect
    </Container>
  );
}

/* -------------------------------------------------------------------------- */

const Container = styled.div``;
