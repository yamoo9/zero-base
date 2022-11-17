import styles from './Headline.module.css';
import { oneOf } from 'prop-types';

export function Headline({ level, ...restProps }) {
  const ComponentName = `h${level}`;
  return <ComponentName className={styles.container} {...restProps} />;
}

Headline.defaultProps = {
  level: 2,
};

Headline.propTypes = {
  level: oneOf([1, 2, 3, 4, 5, 6, '1', '2', '3', '4', '5', '6']),
};
