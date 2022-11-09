import { cleanup, render, screen } from '@testing-library/react';
import { A11yHidden } from './A11yHidden';

describe('A11yHidden 컴포넌트', () => {
  test('A11yHidden 컴포넌트는 정상적으로 렌더링됩니다.', () => {
    render(<A11yHidden>테스트</A11yHidden>);
    const element = screen.getByText(/테스트/);
    expect(element).toBeInTheDocument();
  });

  test('컴포넌트는 기본적으로 <span> 요소로 렌더링 됩니다.', () => {
    render(<A11yHidden data-testid="tester" />);
    const element = screen.getByTestId('tester');
    expect(element.localName).toBe('span');
  });

  test('컴포넌트 `as` 속성(prop) 설정 값에 따라 값과 일치하는 HTML 요소로 렌더링됩니다.', () => {
    render(<A11yHidden as="article" data-testid="tester" />);
    let element = screen.getByTestId('tester');
    expect(element.localName).toBe('article');
  });

  test('컴포넌트에 사용자가 추가한 `className` 속성(prop)이 포함됩니다.', () => {
    let defaultClassName = 'srOnly';
    let expected = 'my-class-name';

    render(<A11yHidden className={expected} data-testid="tester" />);

    const element = screen.getByTestId('tester');
    expect(element).toHaveClass(defaultClassName, expected);
  });

  test('컴포넌트에 사용자가 추가한 `style` 속성(prop)이 포함됩니다.', () => {
    const expected = {
      width: '480px',
      height: '924px',
    };

    render(
      <A11yHidden style={expected}>접근성 감춤 요건에 충족한 요소</A11yHidden>
    );

    const element = screen.queryByText(/^접근성/i);

    expect(element).toHaveStyle(expected);
  });

  test.only('컴포너트의 콘텐츠는 “접근성 감춤 요건”에 충족합니다.', () => {
    // "범용적으로 쓰이는 접근성 감춤 클래스 이름 요건에 충족하는가" `className` prop 테스트
    render(<A11yHidden data-testid="tester" />);

    let element = screen.getByTestId('tester');
    expect(element).toBeA11yHidden();

    cleanup();

    // "접근성 감춤 스타일 요건에 충족하는가" `style` prop 테스트
    // position, clip, width, height, overflow, margin, padding, border, white-space
    const expected = {
      overflow: 'hidden',
      position: 'absolute',
      clip: 'rect(1px, 1px, 1px, 1px)',
      clipPath: 'inset(50%)',
      width: 1,
      height: 1,
      margin: '-1px',
      border: 0,
      padding: 0,
      whiteSpace: 'nowrap',
    };

    render(<A11yHidden style={expected} data-testid="tester" />);

    element = screen.getByTestId('tester');
    expect(element).toBeA11yHidden();
  });

  test('컴포넌트에 `focusable` 속성(prop)을 추가하면 시각적으로 화면에 표시됩니다.', () => {
    render(
      <A11yHidden as="h2" focusable>
        초점 이동 시, 화면에 콘텐츠가 표시되어야 함
      </A11yHidden>
    );
    const element = screen.getByRole('heading');
    expect(element).toHaveClass('focusable');
  });
});
