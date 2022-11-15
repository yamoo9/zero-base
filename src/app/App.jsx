import styles from './App.module.scss';
import { SrOnly } from 'components';

export default function App() {
  return (
    <div className={styles.App} lang="en">
      <SrOnly as="figure" className="my-classname" focusable>
        <figcaption>오늘은 날씨가 우중충...</figcaption>
      </SrOnly>
    </div>
  );
}
