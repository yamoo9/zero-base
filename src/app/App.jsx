import styled from 'styled-components/macro';
import { DataFetchDemo } from 'components';

export default function App() {
  return (
    <Container lang="en">
      <DataFetchDemo endpoint="https://jsonplaceholder.typicode.com/users/1" />
      <DataFetchDemo endpoint="https://jsonplaceholder.typicode.com/users/2" />
      <DataFetchDemo endpoint="https://jsonplaceholder.typicode.com/users/3" />
      <DataFetchDemo endpoint="https://jsonplaceholder.typicode.com/users/4" />
      <DataFetchDemo endpoint="https://jsonplaceholder.typicode.com/users/5" />
      <DataFetchDemo endpoint="https://jsonplaceholder.typicode.com/users/6" />
    </Container>
  );
}

const Container = styled.div`
  margin: 40px;
  text-align: center;

  input {
    padding: 0.4em 0.6em;
  }
`;
