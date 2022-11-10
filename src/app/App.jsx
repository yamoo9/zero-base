import styles from './App.module.scss';
import { AboutSideEffects } from 'components';

export default function App() {
  return (
    <div className={styles.App} lang="en">
      <h1>App</h1>
      <AboutSideEffects />
    </div>
  );
}
