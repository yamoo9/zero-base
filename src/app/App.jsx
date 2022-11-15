import React, { useState } from 'react';
import styles from './App.module.scss';
import { SrOnly } from 'components';

export default function App() {
  const [focusable, setFocusable] = useState(false /* initial value */); // [ state, setState ]

  return (
    <div className={styles.App} lang="en">
      <button type="button" onClick={() => setFocusable(!focusable)}>
        change focusable state
      </button>
      <SrOnly
        href="https://reactjs.org"
        as="a"
        className="my-classname"
        $focusable={focusable}
      >
        <figcaption>오늘은 날씨가 우중충...</figcaption>
      </SrOnly>
    </div>
  );
}
