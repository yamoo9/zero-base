import React from 'react';
import styles from './FormInput.module.css';
import { A11yHidden } from 'components';
import classNames from 'classnames';

export function FormInput({
  id,
  label,
  domRef,
  isHiddenLabel = false,
  type = 'input',
  className,
  ...restProps
}) {
  return (
    <div className={classNames(styles.container, className)}>
      {!isHiddenLabel ? (
        <label htmlFor={id}>{label}</label>
      ) : (
        <A11yHidden as="label" htmlFor={id}>
          label
        </A11yHidden>
      )}
      <input ref={domRef} id={id} type={type} {...restProps} />
    </div>
  );
}
