import { render, screen } from '@testing-library/react';
import { {name} } from './{name}';

describe('{name} 컴포넌트', () => { 
  test('컴포넌트가 정상적으로 렌더링됩니다.', () => {
    render(<{name} />);
    const element = screen.getByText('{name}');
    expect(element).toBeInTheDocument();
  });
});