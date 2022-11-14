import { render, screen } from '@testing-library/react';
import { FormInput } from './FormInput';

describe('FormInput 컴포넌트', () => { 
  test('컴포넌트가 정상적으로 렌더링됩니다.', () => {
    render(<FormInput />);
    const element = screen.getByText('FormInput');
    expect(element).toBeInTheDocument();
  });
});