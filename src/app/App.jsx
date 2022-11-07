// import './App.scss';
import styles from './App.module.scss';
import logo from 'assets/logo.svg';
import { getAsset } from 'utils';

export default function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="React 로고" />
        <img
          src={getAsset('logo512.png')}
          className={styles.AppLogo}
          alt="React 로고"
        />
        <p>
          <code>src/app/App.jsx</code> 파일을 수정하면 브라우저가
          새로고침됩니다.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
        >
          React 배우기
        </a>
      </header>
    </div>
  );
}
