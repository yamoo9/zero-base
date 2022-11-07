import { render, screen, cleanup } from '@testing-library/react';
import { ToggleButton } from './ToggleButton';

// - [x]  토글 버튼 요소가 정상적으로 렌더링 되었습니다.
// - [x]  활성 상태 여부에 따라 활성(ON)/비활성(OFF) 텍스트가 표시됩니다.
// - [ ]  `onToggle` 속성(prop)에 연결된 함수가 정상적으로 실행됩니다.

describe('ToggleButton 컴포넌트', () => {
  test('컴포넌트가 정상적으로 렌더링 됩니다.', () => {
    render(<ToggleButton onText="1" offText="0" />);

    const offTextElement = screen.getByText('0');
    const onTextElement = screen.queryByText('1');
    expect(offTextElement).toBeInTheDocument();
    expect(onTextElement).not.toBeInTheDocument();
  });

  test('활성 상태 여부에 따라 활성(ON)/비활성(OFF) 텍스트가 표시됩니다.', () => {
    let onText = 'ON';
    let offText = 'OFF';

    render(<ToggleButton onText={onText} offText={offText} />);

    let elements = screen.queryAllByRole('button');
    let firstElement = elements[0];
    expect(firstElement).toHaveTextContent(offText);

    screen.debug();

    cleanup();

    render(<ToggleButton onText={onText} offText={offText} on />);

    elements = screen.queryAllByRole('button');
    firstElement = elements[0];

    screen.debug();

    expect(firstElement).toHaveTextContent(onText);
  });
});
