import styles from './App.module.scss';
import { LearnRC } from '../components';

export default function App() {
  return (
    <div className={styles.App}>
      <LearnRC headline="React World" />
    </div>
  );
}
