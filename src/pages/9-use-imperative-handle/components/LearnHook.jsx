import { css } from 'styled-components';
import {
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';

/* -------------------------------------------------------------------------- */

export function LearnHook() {
  const childRef = useRef(null);

  const scrollTop = () => {
    childRef.current.scrollTop();
  };
  const scrollBottom = () => {
    childRef.current.scrollBottom();
  };

  return (
    <div>
      <div
        css={css`
          display: flex;
          gap: 4px;
          margin: 24px 0;

          button {
            color: #fff;
          }
        `}
      >
        <button type="button" onClick={scrollTop}>
          스크롤 ↑
        </button>
        <button type="button" onClick={scrollBottom}>
          스크롤 ↓
        </button>
      </div>
      <Child ref={childRef} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */

const Child = forwardRef(function Child(props, ref) {
  const containerRef = useRef(null);

  const [list] = useState(
    Array(100)
      .fill()
      .map((_, i) => ({ index: i }))
  );

  useLayoutEffect(() => {
    containerRef.current.scrollTop = 0;
  });

  const scrollTop = useCallback(() => {
    containerRef.current.scrollTop = 0;
  }, []);

  const scrollBottom = useCallback(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, []);

  useImperativeHandle(ref, () => ({
    scrollTop,
    scrollBottom,
  }));

  return (
    <div
      ref={containerRef}
      css={css`
        display: flex;
        flex-flow: column;
        gap: 20px;
        overflow: scroll;
        border: 3px solid currentColor;
        height: 200px;

        div {
          border: 3px solid currentColor;
          padding: 20px;
          color: ${({ theme: { color } }) => color.primary[500]};
        }
      `}
    >
      {list.map(({ index }) => (
        <div key={index}>{index}</div>
      ))}
    </div>
  );
});
