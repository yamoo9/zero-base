import styles from './App.module.scss';
import { ToggleButton } from 'components';
import reactLogoUrl, { ReactComponent as ReactLogo } from 'assets/logo.svg';

export default function App() {
  return (
    <div className={styles.App}>
      <a className="homelink" href="/">
        <img src={reactLogoUrl} alt="React 로고" />
      </a>

      <figure>
        <ReactLogo title="React 로고 SVG" data-id="svg-logo" />
      </figure>

      <div role="group">
        <ToggleButton
          onText="ON"
          offText="OFF"
          onToggle={() => {
            console.log('hi toggle button');
          }}
        />
        <ToggleButton onText="ON" offText="OFF" on />
      </div>
    </div>
  );
}
