import { render, screen } from '@testing-library/react';
import { ToggleButton } from './ToggleButton';

// - [x]  토글 버튼 요소가 정상적으로 렌더링 되었습니다.
// - [ ]  활성 상태 여부에 따라 활성(ON)/비활성(OFF) 텍스트가 표시됩니다.
// - [ ]  `onToggle` 속성(prop)에 연결된 함수가 정상적으로 실행됩니다.

// Jest
// describe()
describe('ToggleButton 컴포넌트', () => {
  // test()
  test('컴포넌트가 정상적으로 렌더링 됩니다.', () => {
    // render component
    render(<ToggleButton onText="1" offText="0" />);

    // const onElement = screen.getByText('1');
    const offElement = screen.getByText('0');

    // expect().toMatcher()
    // expect(onElement).not.toBeInTheDocument();
    expect(offElement).toBeInTheDocument();
  });
});
