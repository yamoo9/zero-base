import { useState } from 'react';
import logo from '../assets/logo.svg';
import { FC_Demo } from '../components/FC_Demo/FC_Demo';
import { CC_Demo } from '../components/CC_Demo/CC_Demo';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FC_Demo endpoint="https://jsonplaceholder.typicode.com/posts/1" />
      <CC_Demo endpoint="https://jsonplaceholder.typicode.com/posts/1" />

      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
