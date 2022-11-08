import styles from './App.module.scss';
import { ToggleButton, A11yHidden } from 'components';

export default function App() {
  return (
    <div className={styles.App}>
      <nav lang="en">
        <A11yHidden as="h2">Skip to Content</A11yHidden>
        <A11yHidden
          as="a"
          focusable
          href="https://reactjs.org/"
          rel="noopener noreferrer"
          style={{
            top: 0,
            left: 30,
          }}
        >
          React Website
        </A11yHidden>
        <A11yHidden
          as="a"
          focusable
          href="https://nextjs.org/"
          rel="noopener noreferrer"
          style={{
            top: 0,
            left: 90,
          }}
        >
          Next.js Website
        </A11yHidden>
      </nav>

      <A11yHidden
        as="div"
        className="ButtonGroup"
        style={{
          border: '4px solid tan',
        }}
        role="group"
      >
        <ToggleButton
          onText="ON"
          offText="OFF"
          onToggle={() => {
            console.log('hi toggle button');
          }}
        />
        <ToggleButton onText="ON" offText="OFF" on />
      </A11yHidden>
    </div>
  );
}
