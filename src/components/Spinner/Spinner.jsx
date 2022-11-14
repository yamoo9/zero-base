import styles from './Spinner.module.css';

import React from 'react';
import { getAsset } from 'utils';
import { A11yHidden } from 'components';

const loadingElements = {
  start: document.getElementById('loading-start'),
  end: document.getElementById('loading-end'),
};

export class Spinner extends React.Component {
  static defaultProps = {
    type: 'connect', // 'grow', 'learn', 'connect'*
    message: '로딩 중...',
    showMessage: true,
    timeToDisappear: {
      start: 1500,
      end: 2500,
    },
  };

  render() {
    const { type, message, showMessage } = this.props;
    const spinnerImagePath = getAsset(`spinner/spinner-${type}.gif`);

    return (
      <figure className={styles.container}>
        <img className={styles.image} src={spinnerImagePath} alt="" />
        {showMessage ? (
          <figcaption>{message}</figcaption>
        ) : (
          <A11yHidden as="figcaption">{message}</A11yHidden>
        )}
      </figure>
    );
  }

  // SIDE EFFECTS
  // DOM 접근/조작
  // 클린업의 필요성
  // React.StrictMode : mounted → unmounted → mounted
  componentDidMount() {
    const { start } = loadingElements;
    start.setAttribute('role', 'alert');
    start.insertAdjacentHTML(
      'beforeend',
      `<span class="a11yHidden">${this.props.message}</span>`
    );
  }

  componentWillUnmount() {
    const { start, end } = loadingElements;
    const { timeToDisappear } = this.props;

    setTimeout(() => {
      start.removeAttribute('role');
      start.innerHTML = '';
      end.insertAdjacentHTML(
        'afterbegin',
        `<span class="a11yHidden">로딩이 종료되었습니다.</span>`
      );
    }, timeToDisappear.start);
    setTimeout(() => {
      end.innerHTML = '';
    }, timeToDisappear.end);
  }
}
