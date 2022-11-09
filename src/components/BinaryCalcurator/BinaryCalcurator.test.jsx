import cases from 'jest-in-case';
import { fireEvent, render, screen } from '@testing-library/react';
import { BinaryCalcurator } from './BinaryCalcurator';

describe('BinaryCalcurator 컴포넌트', () => {
  test('컴포넌트는 numberOfButtons 속성(prop)에 설정된 갯수만큼 버튼 컴포넌트를 렌더링합니다.', () => {
    let expected = 6;
    render(<BinaryCalcurator numberOfButtons={expected} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(expected);
  });

  test('컴포넌트의 모든 버튼은 "0" 텍스트 콘텐츠를 기본적으로 렌더링합니다.', () => {
    let expected = 3;
    render(<BinaryCalcurator numberOfButtons={expected} />);

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => expect(button).toHaveTextContent(0));
  });

  test('컴포넌트 제목의 기본 값은 "계산된 바이너리 값: 0" 입니다.', () => {
    let expected = 7;
    render(<BinaryCalcurator numberOfButtons={expected} />);

    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent(/계산된 바이너리 값: 0/i);
  });

  cases(
    '컴포넌트가 포함하는 버튼 클릭 → 바이너리 계산 결과 값 비교',
    ({ numberOfButtons, buttonStates, expected }) => {
      render(<BinaryCalcurator numberOfButtons={numberOfButtons} />);

      const heading = screen.getByRole('heading');
      const buttons = screen.queryAllByRole('button');

      buttonStates.forEach((buttonState, index) => {
        buttonState && fireEvent.click(buttons[index]);
      });

      expect(heading).toHaveTextContent(`계산된 바이너리 값: ${expected}`);
    },
    [
      {
        name: '이진수 001 → 십진수 1',
        numberOfButtons: 3,
        buttonStates: [false, false, true],
        expected: parseInt('001', 2),
      },
      {
        name: '이진수 011 → 십진수 3',
        numberOfButtons: 3,
        buttonStates: [false, true, true],
        expected: parseInt('011', 2),
      },
      {
        name: '이진수 111 → 십진수 7',
        numberOfButtons: 3,
        buttonStates: [true, true, true],
        expected: parseInt('111', 2),
      },
      {
        name: '이진수 101001 → 십진수 41',
        numberOfButtons: 6,
        buttonStates: [true, false, true, false, false, true],
        expected: parseInt('101001', 2),
      },
    ]
  );
});
