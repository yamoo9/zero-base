import { getRandom, getRandomMinMax } from './getRandom.js';
import { repeat } from './repeat.js';

test('getRandom(10)의 반환 값은 0보다 크거나 같고, 10보다 작거나 같다. × 100', () => {
  let min = 0;
  let max = 10;
  let repeatCount = 100;

  repeat(() => {
    let result = getRandom(max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  }, repeatCount);
});

test('getRandomMinMax(22, 46)의 반환 값은 22보다 크거나 같고, 46보다 작거나 같다. × 10', () => {
  let min = 22;
  let max = 46;
  // default repeat count = 10

  repeat(() => {
    let result = getRandomMinMax(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});
