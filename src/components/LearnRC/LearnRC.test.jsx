import { render, screen } from '@testing-library/react';
import { LearnRC } from './LearnRC';

describe('LearnRC 컴포넌트', () => {
  test('LearnRC 컴포넌트는 정상적으로 렌더링됩니다.', () => {
    render(<LearnRC>테스트</LearnRC>);
    const element = screen.getByText(/테스트/);
    expect(element).toBeInTheDocument();
  });
});