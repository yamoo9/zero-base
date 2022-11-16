import styles from './App.module.scss';
import { ToggleButton } from 'components';

export default function App() {
  return (
    <div className={styles.App} lang="en">
      <ToggleButton onText={1} offText={0} />
    </div>
  );
}
