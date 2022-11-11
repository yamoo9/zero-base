import React from 'react';
import styles from './FormInput.module.css';
import { A11yHidden } from 'components';
import classNames from 'classnames';

function _FormInput(
  { id, label, isHiddenLabel = false, type = 'input', className, ...restProps },
  ref
) {
  return (
    <div className={classNames(styles.container, className)}>
      {!isHiddenLabel ? (
        <label htmlFor={id}>{label}</label>
      ) : (
        <A11yHidden as="label" htmlFor={id}>
          label
        </A11yHidden>
      )}
      <input ref={ref} id={id} type={type} {...restProps} />
    </div>
  );
}

export const FormInput = React.forwardRef(_FormInput);
