import styled from 'styled-components/macro';
import { Banner } from 'components';

export default function App() {
  return (
    <Container lang="en">
      <Banner url="banner-good.jpg">접근 가능한 배너 콘텐츠</Banner>
    </Container>
  );
}

const Container = styled.div`
  margin: 40px;
  text-align: center;
`;
