import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Dialog.module.css';
import { getTabbableElements } from 'utils';

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

  componentDidMount() {
    this.#containerRef.current.focus();
    this.#tabbableElements = getTabbableElements(this.#containerRef.current);
    this.settingKeyboardTrap();
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

Dialog.Header = function DialogHeader({ children }) {
  return <header className={styles.header}>{children}</header>;
};

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
