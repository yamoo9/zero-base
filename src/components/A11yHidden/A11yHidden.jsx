import classNames from 'classnames';
import styles from './A11yHidden.module.css';
import { string, elementType, bool, oneOfType, node, any } from 'prop-types';

export function A11yHidden({
  as: ComponentName,
  focusable,
  className,
  children,
  ...restProps
}) {
  return (
    <ComponentName
      className={classNames(
        styles.srOnly,
        {
          [styles.focusable]: focusable,
        },
        className
      )}
      {...restProps}
    >
      {children}
    </ComponentName>
  );
}

A11yHidden.defaultProps = {
  as: 'span',
  focusable: false,
};

A11yHidden.propTypes = {
  as: oneOfType([string, elementType]),
  className: string,
  focusable: bool,
  children: node,
  restProps: any,
};

// Props 검사 수행
// Props 매뉴얼 검사
// prop-types 패키지 설치 / 검사
