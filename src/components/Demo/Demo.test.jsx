import { render, screen } from '@testing-library/react';
import { Demo } from './Demo';

test('Demo 컴포넌트는 정상적으로 렌더링 됩니다.', () => {
  render(<Demo content="React" />);
  const element = screen.getByText('Demo React');
  expect(element).toBeInTheDocument();
});
