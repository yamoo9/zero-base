import styles from './App.module.scss';
import {
  ErrorBoundary,
  TiltCardContainer,
  DemoParagraphs,
  DemoDialog,
} from 'components';

export default function App() {
  return (
    <div className={styles.App} lang="en">
      <TiltCardContainer />
      <ErrorBoundary>
        <DemoDialog />
        <DemoParagraphs />
      </ErrorBoundary>
    </div>
  );
}
