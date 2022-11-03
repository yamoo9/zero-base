import styles from './Link.module.scss';

export function Link({ href, external = false, children }) {
  let externalProps = null;

  if (external) {
    externalProps = {
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }

  return (
    <a className={styles.container} href={href} {...externalProps}>
      {children}
    </a>
  );
}
