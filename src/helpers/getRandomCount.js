export const getRandomCount = (min = 0, max = 100) =>
  Math.round(Math.random() * max - min + min);
