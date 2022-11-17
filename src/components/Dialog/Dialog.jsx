import styled from 'styled-components/macro';
import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Dialog.module.css';
import { getTabbableElements } from 'utils';
import { func } from 'prop-types';

const { documentElement: htmlElement } = document;
const reactDomContainer = document.getElementById('root');

export class Dialog extends React.Component {
  #containerRef = React.createRef(null);

  handleClose = () => {
    this.props.onClose?.();
    this.props.openner.focus();
  };

  render() {
    const { modal = false } = this.props;

    return createPortal(
      <>
        <article
          ref={this.#containerRef}
          tabIndex={-1}
          role="dialog"
          aria-modal={modal}
          className={styles.container}
        >
          {this.props.children}
          <Dialog.Footer onClose={this.handleClose} />
        </article>
        {modal && <div className={styles.dim} onClick={this.handleClose} />}
      </>,
      document.getElementById('dialogZone')
    );
  }

  #tabbableElements = [];

  #bindEscKeyEvents() {
    const handler = (e) => {
      if (e.key.toLowerCase().includes('escape')) {
        console.log('pressed esc key');
        this.handleClose();
      }
    };

    document.addEventListener('keyup', handler);

    // cleanup function
    return () => document.removeEventListener('keyup', handler);
  }

  #unbindEscKeyEvents = null;

  componentDidMount() {
    this.#containerRef.current.focus();
    this.#tabbableElements = getTabbableElements(this.#containerRef.current);
    this.settingKeyboardTrap();

    htmlElement.style.overflowY = 'hidden';
    reactDomContainer.setAttribute('aria-hidden', true);

    this.#unbindEscKeyEvents = this.#bindEscKeyEvents();
  }

  componentWillUnmount() {
    htmlElement.style.overflowY = 'visible';
    reactDomContainer.setAttribute('aria-hidden', false);

    this.#unbindEscKeyEvents?.();
  }

  settingKeyboardTrap() {
    const tabbles = this.#tabbableElements;
    const firstElement = tabbles[0];
    const lastElement = tabbles[tabbles.length - 1];

    firstElement.addEventListener('keydown', (e) => {
      if (e.shiftKey && e.key.toLowerCase().includes('tab')) {
        e.preventDefault();
        lastElement.focus();
      }
    });

    lastElement.addEventListener('keydown', (e) => {
      if (!e.shiftKey && e.key.toLowerCase().includes('tab')) {
        e.preventDefault();
        firstElement.focus();
      }
    });
  }
}

// Dialog.Header = function DialogHeader({ children }) {
//   return <header className={styles.header}>{children}</header>;
// };

Dialog.Header = styled.header`
  * {
    margin: 0;
  }
`;

Dialog.Header.defaultProps = {
  children: <h2>React 포털로 연 다이얼로그(with 모달)</h2>,
};

Dialog.Body = function DialogBody({ children }) {
  return <div className={styles.body}>{children}</div>;
};

Dialog.Footer = function DialogFooter({ children, onClose }) {
  return (
    <footer className={styles.footer}>
      <button
        type="button"
        className={styles.closeButton}
        aria-label="모달 다이얼로그 닫기"
        title="모달 다이얼로그 닫기"
        onClick={onClose}
      >
        <svg width={24} height={24} fillRule="evenodd" clipRule="evenodd">
          <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
        </svg>
      </button>
      {children}
    </footer>
  );
};

Dialog.propTypes = {
  onClose: func,
  // openner: oneOf([null])
};
