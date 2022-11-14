import React from 'react';
import styles from './DemoDialog.module.css';
import { Dialog } from 'components';

export class DemoDialog extends React.Component {
  #opennerRef = React.createRef(null);

  state = {
    show: false,
  };

  handleShowDialog = () => {
    this.setState({ show: true });
  };

  handleHideDialog = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className={styles.box}>
        <button
          ref={this.#opennerRef}
          type="button"
          className={styles.openDialogButton}
          aria-haspopup="dialog"
          aria-label="모달 다이얼로그 열기"
          title="모달 다이얼로그 열기"
          onClick={this.handleShowDialog}
        >
          <svg width={24} height={24} fillRule="evenodd" clipRule="evenodd">
            <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z" />
          </svg>
        </button>
        {this.state.show && (
          <Dialog
            modal
            onClose={this.handleHideDialog}
            openner={this.#opennerRef.current}
          >
            <Dialog.Header>
              <h3>불금 다이얼로그</h3>
            </Dialog.Header>
            <Dialog.Body>
              <ul>
                <li>
                  <a
                    lang="en"
                    href="https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/dialog.html"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <abbr title="ARIA Authoring Practices Guide">APG</abbr>
                    Modal Dialog Example
                  </a>
                </li>
                <li>
                  <a
                    href="https://ko.reactjs.org/docs/accessibility.html#programmatically-managing-focus"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    프로그래밍적으로 포커스 관리하기
                  </a>
                </li>
                <li>
                  <a
                    href="https://ko.reactjs.org/docs/accessibility.html#programmatically-managing-focus"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    프로그래밍적으로 포커스 관리하기
                  </a>
                </li>
              </ul>
            </Dialog.Body>
          </Dialog>
        )}
      </div>
    );
  }
}
