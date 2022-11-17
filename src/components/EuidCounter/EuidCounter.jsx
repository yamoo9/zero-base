import styles from './EuidCounter.module.css';
import React, { useState } from 'react';
import { string, node, func } from 'prop-types';
import cx from 'classnames';

export function EuidCounter({
  value,
  step,
  className,
  render,
  children,
  ...restProps
}) {
  let [count, setCount] = useState(value);

  const onInc = () => setCount(count + step);
  const onDec = () => setCount(count - step);

  return (
    <div className={cx(styles.container, className)} {...restProps}>
      {render
        ? render(count, onInc, onDec)
        : typeof children === 'function'
        ? children(count, onInc, onDec)
        : children}
    </div>
  );
}
EuidCounter.defaultProps = {
  className: string,
  value: 0,
  step: 1,
};

EuidCounter.propTypes = {
  render: func,
};

EuidCounter.Output = function EuidCounterOutput({
  children,
  className,
  ...restProps
}) {
  return (
    <output className={cx(styles.output, className)} {...restProps}>
      {children}
    </output>
  );
};
EuidCounter.Output.defaultProps = {
  className: string,
  children: node,
};

EuidCounter.Button = function EuidCounterButton({
  label,
  className,
  children,
  ...restProps
}) {
  return (
    <button
      type="button"
      className={cx(styles.button, className)}
      aria-label={label}
      {...restProps}
    >
      {children}
    </button>
  );
};
EuidCounter.Button.propTypes = {
  label: string,
  className: string,
  children: node,
};
