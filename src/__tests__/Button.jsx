import { render, screen } from '@testing-library/react';

/* -------------------------------------------------------------------------- */

function Button(props) {
  return <button type={props.type ?? 'button'}>{props.children}</button>;
}

/* -------------------------------------------------------------------------- */

test('Button 컴포넌트는 <button> 요소로 렌더링 된다.', () => {
  render(<Button>전송</Button>);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
