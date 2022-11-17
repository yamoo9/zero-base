import styled from 'styled-components/macro';
import { DemoDialog, FormInput } from 'components';

export default function App() {
  return (
    <Container lang="en">
      <DemoDialog />
      <form>
        <FormInput
          id="user-email"
          type="email"
          label="이메일"
          className="hey"
          isHiddenLabel
          placeholder="user@company.io"
          css={`
            margin: ${(...args) => {
              console.log(args);
              return '20px 10px';
            }};
            border: 0;
            padding: 1em;
            font-size: 15px;
            font-weight: bold;
            line-height: 1.7;
            color: #fff;
          `}
        />
      </form>
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
