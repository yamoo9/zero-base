import styled from 'styled-components/macro';
import { element, oneOf, node, string } from 'prop-types';
import { Header, Main, Footer } from '@/components';

/* -------------------------------------------------------------------------- */

export function Layout({ sidebar, sidebarPosition, sidebarWidth, children }) {
  return (
    <StyledLayout>
      <Header />
      <Layout.Contents>
        <Layout.Container>
          {sidebar && sidebarPosition === 'left' && (
            <Layout.Sidebar side="left" width={sidebarWidth}>
              {sidebar}
            </Layout.Sidebar>
          )}
          <Main>{children}</Main>
          {sidebar && sidebarPosition === 'right' && (
            <Layout.Sidebar side="right" width={sidebarWidth}>
              {sidebar}
            </Layout.Sidebar>
          )}
        </Layout.Container>
      </Layout.Contents>
      <Footer />
    </StyledLayout>
  );
}

Layout.defaultProps = {
  sidebar: null,
  sidebarPosition: 'left',
  sidebarWidth: '20%',
};

Layout.propTypes = {
  sidebar: element,
  sidebarPosition: oneOf(['left', 'right']),
  sidebarWidth: string,
  children: node,
};

/* -------------------------------------------------------------------------- */

Layout.Container = styled.div.attrs(({ maxWidth, usingFlex }) => ({
  $mw: maxWidth,
  $uf: usingFlex,
}))`
  ${({ $uf }) =>
    $uf &&
    `
      display: flex;
      flex-flow: column wrap;
    `}
  max-width: ${({ $mw }) => ($mw ? `${$mw}px` : null)};
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;

  @media (min-width: 40em) {
    flex-direction: row;
  }
`;

Layout.Container.displayName = 'LayoutContainer';

Layout.Container.defaultProps = {
  maxWidth: 1440,
  usingFlex: true,
};

/* -------------------------------------------------------------------------- */

const StyledLayout = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
`;

/* -------------------------------------------------------------------------- */

Layout.Contents = styled.div`
  flex: 1;
`;

/* -------------------------------------------------------------------------- */

Layout.Sidebar = styled.aside.attrs(({ side }) => ({
  $side: side,
}))`
  display: flex;
  order: ${({ $side }) => ($side === 'right' ? 1 : null)};
  width: ${({ width }) => width};

  ul {
    overflow: auto;
    width: 100vw;
    display: flex;
    flex-direction: row;
    margin: 8px 0;
    padding: 2px;
    padding-bottom: 0.5em;
    list-style: none;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    display: block;
    min-width: 50%;
    padding: 0.4em;
    font-size: 1.2rem;
    text-align: ${({ $side }) => ($side === 'right' ? 'right' : null)};
  }

  @media (min-width: 40em) {
    ul {
      flex-direction: column;
      width: auto;
      padding-bottom: 0;
    }
  }
`;

Layout.Sidebar.displayName = 'LayoutSidebar';
