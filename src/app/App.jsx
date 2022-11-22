import AppThemeProvider from '@/app/AppThemeProvider';
import AppRouter from '@/app/AppRouter';
import { Layout } from '@/components';

/* -------------------------------------------------------------------------- */

export default function App() {
  return (
    <AppThemeProvider>
      <Layout
        // sidebarPosition="right"
        sidebar={<SideBar />}
      >
        <AppRouter />
      </Layout>
    </AppThemeProvider>
  );
}

/* -------------------------------------------------------------------------- */

function SideBar() {
  return (
    <nav>
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
