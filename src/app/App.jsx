import styles from './App.module.scss';
import React from 'react';
import { EuidCounter as Counter } from 'components';
import { css } from 'styled-components/macro';

export default function App() {
  let [num, setNum] = React.useState(11);

  const onIncrementNum = () => setNum(num + 1);
  const onDecrementNum = () => setNum(num - 1);

  return (
    <div className={styles.App}>
      {/* render props : props의 타입이 함수인 경우 */}
      <Counter value={num} step={2} min={-10} max={10}>
        <Counter.Button label="카운트 감소" onUpdate={onDecrementNum}>
          -
        </Counter.Button>
        <Counter.Output>{num}</Counter.Output>
        <Counter.Button label="카운트 증가" onUpdate={onIncrementNum}>
          +
        </Counter.Button>
      </Counter>

      <hr />

      <Counter.Output>{num}</Counter.Output>

      <hr />

      <div
        css={css`
          display: flex;
          justify-content: center;
          gap: 4px;
        `}
      >
        <Counter.Button label="카운트 증가" onUpdate={onIncrementNum}>
          +
        </Counter.Button>
        <Counter.Button label="카운트 감소" onUpdate={onDecrementNum}>
          -
        </Counter.Button>
      </div>
    </div>
  );
}
