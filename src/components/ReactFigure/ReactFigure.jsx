import './ReactFigure.css';
import { Link } from '../Link';

export function ReactFigure() {
  return (
    <figure className="react-figure">
      <Link href="https://reactjs.org" external>
        <img className="logo" src="assets/react.svg" alt="React" />
      </Link>
      <figcaption className="description">React 툴체인 매뉴얼 구성</figcaption>
    </figure>
  );
}
