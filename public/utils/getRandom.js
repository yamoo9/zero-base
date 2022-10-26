const getRandom = (n) => Math.round(Math.random() * n);
const getRandomMinMax = (min = 0, max = 100) => getRandom(max - min) + min;

module.exports = { getRandom, getRandomMinMax };
