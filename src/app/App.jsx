import styles from './App.module.scss';
import { ToggleButton } from 'components';

export default function App() {
  return (
    <div className={styles.App}>
      <ToggleButton
        onText="ON"
        offText="OFF"
        onToggle={() => {
          console.log('hi toggle button');
        }}
      />
      <ToggleButton onText="ON" offText="OFF" on />
    </div>
  );
}
