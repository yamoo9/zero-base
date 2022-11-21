import styled from 'styled-components';
import { HeaderBar } from '@/components';
import { ThemeProvider } from '@/contexts/theme';
import { AuthProvider } from '@/contexts/auth';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Container>
          <HeaderBar />
        </Container>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
`;
