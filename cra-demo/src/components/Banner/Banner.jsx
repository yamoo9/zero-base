import styles from './Banner.module.css';
import classNames from 'classnames';
import { A11yHidden } from 'components';
import { getAsset } from 'utils';

export function Banner({
  as: ComponentName,
  url,
  className,
  width,
  height,
  style,
  children,
  ...restProps
}) {
  return (
    <ComponentName
      className={classNames(styles.container, className)}
      style={{
        backgroundImage: url && `url(${getAsset(url)})`,
        width,
        height,
        ...style,
      }}
      {...restProps}
    >
      <A11yHidden>{children}</A11yHidden>
    </ComponentName>
  );
}

Banner.defaultProps = {
  as: 'figure',
  width: 374,
  height: 800,
};
