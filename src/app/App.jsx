import { BinaryCalcurator } from 'components';
import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.App}>
      <BinaryCalcurator numberOfButtons={1} />
    </div>
  );
}
