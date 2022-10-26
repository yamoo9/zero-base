const { getRandom } = require('./getRandom');

test('getRandom(10)의 반환 값은 0보다 크거나 같고, 10보다 작거나 같다.', () => {
  let value = 10;
  let result = getRandom(value);
  expect(result).toBeGreaterThan(value);
  expect(result).toBeLessThanOrEqual(value);
});
