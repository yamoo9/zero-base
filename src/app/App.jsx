import styled from 'styled-components';
import { HeaderBar } from '@/components';

function App() {
  return (
    <Container>
      <HeaderBar />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
`;
