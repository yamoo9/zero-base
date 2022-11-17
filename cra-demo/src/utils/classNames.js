import { isArray, isNumber, isObject, isString } from './typeIs';

export const classNames = (...classes) => {
  return classes
    .map((className) => {
      if (!className) return '';
      if (isString(className)) return className;
      if (isNumber(className)) return className.toString();

      if (isArray(className)) {
        return className
          .map((name) => classNames(name))
          .join(' ')
          .trim();
      }

      if (isObject(className)) {
        return Object.entries(className)
          .filter(([_, value]) => value)
          .map(([key]) => key)
          .join(' ')
          .trim();
      }

      return '';
    })
    .filter(Boolean)
    .join(' ')
    .trim();
};
