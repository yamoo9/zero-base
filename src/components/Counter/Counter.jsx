import { useState, useCallback, useMemo } from 'react';
import { number, func } from 'prop-types';

/*
  Counter
    [count <- props { count, step, min, max, onUpdate }]
    - [x] Counter.Button {onDecrement}
    - [o] Counter.Display {count}
    - [x] Counter.Button {onIncrement}
*/

export function Counter({ count: initialCount, step }) {
  const [count, setCount] = useState(initialCount);

  // useMemo(() => fn, deps)
  const handleIncrement = useMemo(
    () => () => setCount((prevCount) => prevCount + step),
    [step]
  );

  // useCallback(fn, deps)
  const handleDecrement = useCallback(() => {
    setCount((prevCount) => prevCount - step);
  }, [step]);

  // memoized Components
  const DecButton = useMemo(
    () => <Counter.Button onClick={handleDecrement}>-</Counter.Button>,
    [handleDecrement]
  );

  const IncButton = useMemo(
    () => <Counter.Button onClick={handleIncrement}>+</Counter.Button>,
    [handleIncrement]
  );

  return (
    <div>
      {DecButton}
      <Counter.Display>{count}</Counter.Display>
      {IncButton}
    </div>
  );
}

Counter.defaultProps = {
  count: 1,
  step: 1,
  min: 1,
  max: 10,
};

Counter.propTypes = {
  count: number,
  step: number,
  min: number,
  max: number,
  onUpdate: func,
};

/* -------------------------------------------------------------------------- */

Counter.Button = function CounterButton(props) {
  return <button type="button" {...props} />;
};

Counter.Display = function CounterDisplay(props) {
  return <output {...props} />;
};
