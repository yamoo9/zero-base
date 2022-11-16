import { render, screen } from '@testing-library/react';
import { AboutSideEffects } from './AboutSideEffects';

describe('AboutSideEffects 컴포넌트', () => { 
  test('컴포넌트가 정상적으로 렌더링됩니다.', () => {
    render(<AboutSideEffects />);
    const element = screen.getByText('AboutSideEffects');
    expect(element).toBeInTheDocument();
  });
});