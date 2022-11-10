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

  test('컴포넌트에 렌더링 된 3개의 버튼이 모두 클릭된 경우, 제목은 "바이너리 계산 값 : 7" 입니다.', () => {
    let buttonStates = [true, true, true];
    let expected = 7;

    render(<BinaryCalcurator numberOfButtons={buttonStates.length} />);

    const buttons = screen.getAllByRole('button');
    const heading = screen.getByRole('heading');

    buttonStates.forEach(
      (buttonState, index) => buttonState && fireEvent.click(buttons[index])
    );

    expect(heading).toHaveTextContent(`바이너리 계산 값: ${expected}`);
  });

  test('컴포넌트에 렌더링 된 6개의 버튼의 상태가 "000101", 제목은 "바이너리 계산 값 : 5" 입니다.', () => {
    let buttonStates = [false, false, false, true, false, true];
    let expected = 5;

    render(<BinaryCalcurator numberOfButtons={buttonStates.length} />);

    const buttons = screen.getAllByRole('button');
    const heading = screen.getByRole('heading');

    buttonStates.forEach(
      (buttonState, index) => buttonState && fireEvent.click(buttons[index])
    );

    expect(heading).toHaveTextContent(`바이너리 계산 값: ${expected}`);
  });

  test('컴포넌트에 렌더링 된 12개의 버튼의 상태가 "110111010001", 제목은 "바이너리 계산 값 : 3537" 입니다.', () => {
    let buttonStates = [
      true,
      true,
      false,
      true,
      true,
      true,
      false,
      true,
      false,
      false,
      false,
      true,
    ];
    let expected = 3537;

    render(<BinaryCalcurator numberOfButtons={buttonStates.length} />);

    const buttons = screen.getAllByRole('button');
    const heading = screen.getByRole('heading');

    buttonStates.forEach(
      (buttonState, index) => buttonState && fireEvent.click(buttons[index])
    );

    expect(heading).toHaveTextContent(`바이너리 계산 값: ${expected}`);
  });
});
