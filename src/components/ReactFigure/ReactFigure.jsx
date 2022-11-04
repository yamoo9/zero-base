import reactLogoPath from '@/assets/react.svg';
import classes from './ReactFigure.module.scss';
import { Link } from '@/components';

export function ReactFigure() {
  return (
    <figure className={classes.container}>
      <Link href="https://reactjs.org" external>
        <img className={classes.logo} src={reactLogoPath} alt="React" />
      </Link>
      <figcaption className={classes.description}>
        React 툴체인 매뉴얼 구성
      </figcaption>
    </figure>
  );
}
