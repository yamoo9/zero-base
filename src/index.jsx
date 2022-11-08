/* eslint-disable no-lone-blocks */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import 'styles/global.css';
import { StrictMode } from 'react';
import App from 'app/App';

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
  import('./reportWebVitals').then(({ default: reportWebVitals }) =>
    reportWebVitals(console.table)
  );
}
