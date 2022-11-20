import { bool } from 'prop-types';
import styled from 'styled-components/macro';

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export function SignInOutButton({ isLogin, ...restProps }) {
  return (
    <Button {...restProps}>
      <LogInOutIcon isLogin={!isLogin} />
      {!isLogin ? '로그인' : '로그아웃'}
    </Button>
  );
}

SignInOutButton.defaultProps = {
  isLogin: false,
};

SignInOutButton.propTypes = {
  isLogin: bool,
};

/* -------------------------------------------------------------------------- */
/* Styled Components                                                          */
/* -------------------------------------------------------------------------- */

const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  cursor: pointer;
  min-width: 100px;
  border: 0;
  padding: 10px 16px;
  background: ${({ color }) => color ?? '#c5dded'};
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
`;

const LogInOutIcon = styled(({ className, isLogin }) => {
  let d = isLogin
    ? 'M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
    : 'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1';
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={d}
      />
    </svg>
  );
})`
  width: 16px;
  height: 16px;
`;
