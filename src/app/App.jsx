import styles from './App.module.scss';
import { EuidCounter as Counter } from 'components';

export default function App() {
  return (
    <div className={styles.App}>
      <Counter
        render={(count, onInc, onDec) => {
          console.log({ count, onInc, onDec });
          return (
            <>
              <Counter.Button label="카운트 감소" onClick={onDec}>
                -
              </Counter.Button>
              <Counter.Output>{count}</Counter.Output>
              <Counter.Button label="카운트 증가" onClick={onInc}>
                +
              </Counter.Button>
            </>
          );
        }}
      />

      <Counter>
        {(count, onInc, onDec) => (
          <>
            <Counter.Button label="카운트 감소" onClick={onDec}>
              -
            </Counter.Button>
            <Counter.Output>{count}</Counter.Output>
            <Counter.Button label="카운트 증가" onClick={onInc}>
              +
            </Counter.Button>
          </>
        )}
      </Counter>

      <Counter>
        <div>hey!!!</div>
      </Counter>

      <hr />

      <Counter.Output>9</Counter.Output>
    </div>
  );
}
