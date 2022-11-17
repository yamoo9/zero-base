import { render, screen } from '@testing-library/react';
import { DemoDialog } from './DemoDialog';

describe('DemoDialog 컴포넌트', () => { 
  test('컴포넌트가 정상적으로 렌더링됩니다.', () => {
    render(<DemoDialog />);
    const element = screen.getByText('DemoDialog');
    expect(element).toBeInTheDocument();
  });
});