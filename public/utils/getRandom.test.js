const { getRandom, getRandomMinMax } = require('./getRandom');

test('getRandom(10)의 반환 값은 0보다 크거나 같고, 10보다 작거나 같다.', () => {
  let min = 0;
  let max = 10;
  let result = getRandom(max);
  expect(result).toBeGreaterThanOrEqual(min);
  expect(result).toBeLessThanOrEqual(max);
});

test('getRandomMinMax(22, 46)의 반환 값은 22보다 크거나 같고, 46보다 작거나 같다.', () => {
  let min = 22;
  let max = 46;
  let result = getRandomMinMax(min, max);
  expect(result).toBeGreaterThanOrEqual(min);
  expect(result).toBeLessThanOrEqual(max);
});
