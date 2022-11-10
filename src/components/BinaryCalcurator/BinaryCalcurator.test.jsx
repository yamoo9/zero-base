import { render, screen, fireEvent } from '@testing-library/react';
import { BinaryCalcurator } from './BinaryCalcurator';

describe('BinaryCalcurator 컴포넌트', () => {
  test('numberOfButtons 속성(prop)의 갯수 만큼 ToggleButton 컴포넌트가 렌더링 됩니다.', () => {
    let expected = 7;
    render(<BinaryCalcurator numberOfButtons={expected} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(expected);
  });

  test('컴포넌트 내부 버튼 컴포넌트의 최초 표시되는 텍스트 값은 모두 `0`입니다.', () => {
    let expected = 4;
    let expectedTextContent = 0;
    render(<BinaryCalcurator numberOfButtons={expected} />);

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) =>
      expect(button).toHaveTextContent(expectedTextContent)
    );
  });

  test('컴포넌트 내부 첫번째 버튼 클릭 시, 텍스트 값은 `1`로 변경됩니다.', () => {
    let expected = 2;
    render(<BinaryCalcurator numberOfButtons={expected} />);

    const buttons = screen.getAllByRole('button');
    const firstButton = buttons[0];

    expect(firstButton).toHaveTextContent(0);

    fireEvent.click(firstButton);

    expect(firstButton).toHaveTextContent(1);
  });
});
