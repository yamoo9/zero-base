import { render, screen } from '@testing-library/react';
import { Dialog } from './Dialog';

describe('Dialog 컴포넌트', () => { 
  test('컴포넌트가 정상적으로 렌더링됩니다.', () => {
    render(<Dialog />);
    const element = screen.getByText('Dialog');
    expect(element).toBeInTheDocument();
  });
});