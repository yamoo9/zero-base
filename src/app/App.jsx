/* eslint-disable @typescript-eslint/no-unused-vars */

import { Fragment } from 'react';
import styles from './App.module.css';
import { EmojiOops, PrettyPrintCode } from '@/components';

/* -------------------------------------------------------------------------- */

export default function App() {
  return <ListRedering />;
}

/* -------------------------------------------------------------------------- */

let error = null;

// 오류 메시지를 포함한 객체를 추가해보세요.
error = {
  title: 'UNKNOWN ERROR',
  message: '알 수 없는 오류가 발생했습니다.',
  print() {
    console.error(`${this.title} ${this.message}`);
  },
};

/* -------------------------------------------------------------------------- */

const ConditionalRendering = () => {
  error ?? console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');

  error?.log?.();

  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>
        {!error
          ? 'React 조건부 렌더링'
          : [<EmojiOops key="EmojiOops" height={200} />, error.message]}
      </h1>
      {!error && <p>오류가 존재하면 렌더링 되도록 코드를 작성합니다.</p>}
    </div>
  );
};

/* -------------------------------------------------------------------------- */

// import db from '../api/db.json';
// import('../api/db.json').then(({ navigation }) => console.log(navigation));

const db = require('../api/db.json');

// console.log(db);

const {
  navigation: { items: list },
} = db;

const ListItem = ({ link, text }) => (
  <li>
    <a href={link}>{text}</a>
  </li>
);

const renderList = (list) => {
  return list.map(({ link, text }) => (
    <ListItem key={link} link={link} text={text} />
  ));
};

// `api/db.json` 데이터에서 `navigation.items` 데이터를 화면에 출력해보세요.
// `list` 매개 변수를 순환해 아이템 리스트를 반환하는 `renderList` 함수를 만들어 활용해봅니다.

const ListRedering = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>React 리스트 렌더링 (배열)</h1>

      {/* 배열 리스트 렌더링 */}
      <nav className={styles.globalNavigation}>
        {/* 웹 표준을 준수해 비순차 목록을 화면에 출력해봅니다. */}
        {/* renderList(list) 함수를 실행해 리스트 렌더링 처리해봅니다. */}
        <ul>{renderList(list)}</ul>
      </nav>

      {/* 객체 리스트 렌더링 */}
      <dl className={styles.descriptionList}>
        {/* 웹 표준을 준수해 설명 목록을 화면에 출력해봅니다. */}
        {Object.entries(db).map(([key, value]) => {
          return (
            <Fragment key={key}>
              <dt>{key}</dt>
              <dd>
                {typeof value === 'object' ? (
                  <PrettyPrintCode code={value} />
                ) : (
                  value
                )}
              </dd>
            </Fragment>
          );
        })}
        {/* `db` 객체의 "속성", "값" 쌍을 순환하여 리스트 렌더링 해보세요. */}
        {/* 값의 유형이 객체 또는 배열인 경우, 코드가 화면에 출력되도록 설정합니다. */}
        {/* `isArray`, `isObject` 유틸리티 함수를 만들어 활용하세요. */}
        {/* 코드를 화면에 출력할 때는 <PrettyPrintCode /> 컴포넌트를 활용합니다. (`code` 속성) */}
        {/* <PrettyPrintCode code={db} /> */}
      </dl>
    </div>
  );
};
