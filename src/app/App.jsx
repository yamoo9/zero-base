import styled from 'styled-components';
import { HeaderBar } from '@/components';
import { ThemeProvider } from '@/contexts/theme';

function App() {
  return (
    <ThemeProvider>
      <Container>
        <HeaderBar />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
`;
