import { getRandom } from './getRandom.js';

test('getRandom(10)의 반환 값은 0보다 크거나 같고, 10보다 작거나 같다.', () => {
  // 기대 값 expected
  // 전달 값 received
  expect(getRandom(10)).toBeLessThenOrEqual()
});