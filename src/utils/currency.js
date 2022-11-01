import { numberWithComma } from './numberWithComma.js';

export const currency = (price, currencyUnit = '원') => {
  price = numberWithComma(price);
  return currencyUnit === '원'
    ? `${price}${currencyUnit}`
    : `${currencyUnit}${price}`;
};
