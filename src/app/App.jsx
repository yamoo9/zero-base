/* eslint-disable no-unused-vars */

import AppThemeProvider from '@/app/AppThemeProvider';
import { string } from 'prop-types';
import AppRouter from '@/app/AppRouter';
import { Layout } from '@/components';

/* -------------------------------------------------------------------------- */

export default function App() {
  return (
    <AppThemeProvider>
      <Layout
        sidebar={<SideBar title="React 훅 학습 목차" />}
        // sidebarPosition="right"
      >
        <AppRouter />
      </Layout>
    </AppThemeProvider>
  );
}

/* -------------------------------------------------------------------------- */

function SideBar({ title }) {
  return (
    <nav aria-label={title}>
      <ul>
        <li>
          <a href="/use-state">useState</a>
        </li>
        <li>
          <a href="/use-effect">useEffect</a>
        </li>
        <li>
          <a href="/use-layout-effect">useLayoutEffect</a>
        </li>
        <li>
          <a href="/use-ref">useRef</a>
        </li>
        <li>
          <a href="/use-context">useContext</a>
        </li>
        <li>
          <a href="/use-callback">useCallback</a>
        </li>
        <li>
          <a href="/use-memo">useMemo</a>
        </li>
        <li>
          <a href="/use-reducer">useReducer</a>
        </li>
      </ul>
    </nav>
  );
}

SideBar.propTypes = {
  title: string.isRequired,
};
