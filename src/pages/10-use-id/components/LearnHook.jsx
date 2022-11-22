import { useId } from 'react';
import { string, oneOf } from 'prop-types';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export function LearnHook() {
  return (
    <Container>
      <FormInput type="email" label="이메일" guide="user@company.io" />
      <FormInput
        type="password"
        label="비밀번호"
        guide="영문, 숫자 조합 6자 이상 입력"
      />
    </Container>
  );
}

/* -------------------------------------------------------------------------- */

function FormInput({ label, type, guide, ...restProps }) {
  const id = useId();

  let guideId = `${id}-guide`;
  return (
    <div className="FormInput">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        describedby={guide ? guideId : null}
        {...restProps}
      />
      {guide && (
        <span role="alert" id={guideId}>
          {guide}
        </span>
      )}
    </div>
  );
}

FormInput.propTypes = {
  label: string.isRequired,
  type: oneOf(['text', 'search', 'email', 'number', 'password']),
  guide: string,
};

/* -------------------------------------------------------------------------- */

const Container = styled.div`
  display: inline-flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;

  margin-top: 20px;

  label {
    display: inline-block;
    margin-right: 4px;
    width: 70px;
  }

  input {
    width: 220px;
    border: 0;
    border-bottom: 2px solid currentColor;
    padding: 0.3em 0.6em;
    color: ${({ theme: { color } }) => color.primary[500]};
  }

  [role='alert'] {
    display: block;
    margin-top: 4px;
    font-size: 12px;
    padding-left: 74px;
    color: ${({ theme: { color } }) => color.primary[700]};
  }
`;
