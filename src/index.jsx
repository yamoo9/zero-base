/* eslint-disable no-lone-blocks */

// 폴리필 라이브러리 구성
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import 'styles/global.css';
import { StrictMode } from 'react';
import App from 'app/App';

// 환경 변수 활용
// console.log(process.env);

// v17 API (support IE)
{
  // import('react-dom').then(({ render }) => {
  // render(
  //   <StrictMode>
  //     <App />
  //   </StrictMode>,
  //   document.getElementById('root')
  // );
  // });
}

// v18 API
import('react-dom/client').then(({ createRoot }) => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});

// 조건 처리
// 빌드 환경에서만 Web Vitals 리포트 출력
if (process.env.NODE_ENV.includes('production')) {
  // PROBLEM. 관심사의 분리
  // import reportWebVitals from './reportWebVitals';
  // reportWebVitals();

  // CASE 1. CommonJS 모듈
  // const reportWebVitals = require('./reportWebVitals');
  // reportWebVitals();

  // CASE 2. ES 모듈
  import('./reportWebVitals').then(({ default: reportWebVitals }) =>
    reportWebVitals(console.table)
  );
}
