import Button from './components/Button.js'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
        <React.StrictMode>
            <Button type="idle">업로드</Button>
            <Button type="pending">업로드 중</Button>
            <Button type="resolved">완료</Button>
            <Button type="rejected">실패</Button>
            <Button type="disabled">업로드</Button>
        </React.StrictMode>
)