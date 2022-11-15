import styled, { css } from 'styled-components/macro';
import { A11yHidden } from 'components';

const boxMixin = css`
  margin: 20px 10px;
  border: 0;
  padding: 1em;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.7;
  color: #fff;
`;

function _FormInput({
  id,
  label,
  domRef,
  isHiddenLabel = false,
  type = 'input',
  className,
  ...restProps
}) {
  return (
    <div className={className}>
      {!isHiddenLabel ? (
        <label htmlFor={id}>{label}</label>
      ) : (
        <A11yHidden as="label" htmlFor={id}>
          label
        </A11yHidden>
      )}
      <input ref={domRef} id={id} type={type} {...restProps} />
    </div>
  );
}

export const FormInput = styled(_FormInput)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  margin: 12px;

  input {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.fg};
  }
`;
