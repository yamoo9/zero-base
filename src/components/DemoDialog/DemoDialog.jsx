import styles from './DemoDialog.module.css';

export function DemoDialog(props) {
  return (
    <div className={styles.box} {...props}>
      <button
        type="button"
        className={styles.openDialogButton}
        aria-haspopup="dialog"
        aria-label="모달 다이얼로그 열기"
        title="모달 다이얼로그 열기"
      >
        <svg width={24} height={24} fillRule="evenodd" clipRule="evenodd">
          <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z" />
        </svg>
      </button>
    </div>
  );
}
