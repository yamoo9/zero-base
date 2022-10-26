export const getElements = (selector, context = document) =>
  Array.from(context.querySelectorAll(selector));

export const getElement = (...args) => getElements(...args)[0];
