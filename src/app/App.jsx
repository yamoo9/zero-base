import { Link } from '../components';

const App = () => (
  <figure className="react-figure">
    <Link href="https://reactjs.org" external>
      <img className="logo" src="assets/react.svg" alt="React" />
    </Link>
    <figcaption className="description">React 툴체인 매뉴얼 구성</figcaption>
  </figure>
);

export default App;
