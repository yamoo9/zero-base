import { memo, useReducer } from 'react';
import { number, func } from 'prop-types';
import {
  counterReducer,
  initCountVaue,
  incrementCount,
  decrementCount,
} from './counterReducer';

export function Counter({ step }) {
  const [state, dispatch] = useReducer(counterReducer, initCountVaue);

  const handleIncrement = () => dispatch(incrementCount(step));

  const handleDecrement = () => dispatch(decrementCount(-1 * step));

  return (
    <div>
      <Counter.Button onClick={handleDecrement}>-</Counter.Button>
      <Counter.Display>{state}</Counter.Display>
      <Counter.Button onClick={handleIncrement}>+</Counter.Button>
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

Counter.Button = memo(function CounterButton(props) {
  return <button type="button" {...props} />;
});

Counter.Display = memo(function CounterDisplay(props) {
  return <output {...props} />;
});
