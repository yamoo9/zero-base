export var getRandomCount = function getRandomCount(min, max) {
  if (min === void 0) {
    min = 0;
  }

  if (max === void 0) {
    max = 100;
  }

  return Math.round(Math.random() * max - min + min);
};
//# sourceMappingURL=getRandomCount.js.map