import { numberWithComma } from './numberWithComma';

export const currency = (price: number, currencyUnit = '원'): string => {
  const convertedPrice = numberWithComma(price);
  return currencyUnit === '원'
    ? `${price}${convertedPrice}`
    : `${convertedPrice}${price}`;
};
