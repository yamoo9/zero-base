export const typeIs = (o) =>
  Object.prototype.toString.call(o).toLowerCase().slice(8, -1);

export const isObject = (o) => typeIs(o) === 'object';
export const isArray = (o) => typeIs(o) === 'array';
export const isString = (o) => typeIs(o) === 'string';
export const isNumber = (o) => typeIs(o) === 'number' && !isNaN(o);
