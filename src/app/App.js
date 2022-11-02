import { UploadButton, STATUS } from '../components/index.js';

export default function App({ status }) {
  return (
    <div className="App">
      <h2>상태 트랜지션</h2>
      <UploadButton status={status} />

      <h2>상태 뷰</h2>
      <UploadButton />
      <UploadButton status={STATUS.pending} />
      <UploadButton status={STATUS.resolved} />
      <UploadButton status={STATUS.rejected} />
      <UploadButton disabled />

      <h2>커스텀 뷰</h2>
      <UploadButton
        status={STATUS.pending}
        size={16}
        color="#706efd"
        lang="en"
        title="로딩 중..."
      >
        loading
      </UploadButton>
    </div>
  );
}
