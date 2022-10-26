// ---------------------------------------------------------------------
// TODO
// ---------------------------------------------------------------------
// - [ ] repeat 유틸리티 함수가 정상 작동하는 테스트 시나리오를 작성한다.

import { repeat } from './repeat.js';

test('repeat(() => {}) 유틸리티의 카운트 횟수 기본 값은 10회이다.', () => {
  let count = 0;
  let defaultRepeatCount = 10;
  repeat(() => (count += 1));
  expect(count).toBe(defaultRepeatCount);
});

test('repeat(() => {}, 100) 카운트 횟수는 100회이다.', () => {
  let count = 0;
  let userDefinedRepeatCount = 100;
  repeat(() => (count += 1), userDefinedRepeatCount);
  expect(count).toBe(userDefinedRepeatCount);
});

test('repeat(100)처럼 첫번째 인자의 타입이 함수가 아니면 "타입 오류"를 출력한다.', () => {
  const testRepeat = () => repeat(100);
  expect(testRepeat).toThrow(/함수/);
});
