import './App.css';
import logo from 'assets/logo.svg';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React 로고" />
        <p>
          <code>src/app/App.jsx</code> 파일을 수정하면 브라우저가
          새로고침됩니다.
        </p>
        <a
          className="App-link"
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
