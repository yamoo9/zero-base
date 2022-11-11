import styles from './Dialog.module.css';

export function Dialog() {
  return (
    <>
      <article role="dialog" aria-modal="true" className={styles.container}>
        <header className={styles.header}>
          <h2>React 포털로 연 다이얼로그(with 모달)</h2>
        </header>
        <div className={styles.body}>
          <p>여기가 React 앱 밖의 세상인가요?!</p>
        </div>
        <footer className={styles.footer}>
          <button
            type="button"
            className="closeButton"
            aria-label="모달 다이얼로그 닫기"
            title="모달 다이얼로그 닫기"
          >
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
            </svg>
          </button>
        </footer>
      </article>
      <div className={styles.dim} />
    </>
  );
}
