import { styleLog, test, currency, numberWithComma } from './utils/index.js';

styleLog(
  '안녕! 웹팩 😃',
  `
    font-size: 4rem;
    font-weight: bold;
  `
);

let price = 89_000;

test(currency(price) === `${numberWithComma(price)}원`);
