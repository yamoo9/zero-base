export const addClass = (element, ...classNames) => {
  classNames.length > 0 && element.classList.add(...classNames);
};

export const removeClass = (element, ...classNames) => {
  classNames.length > 0
    ? element.classList.remove(...classNames)
    : (element.className = '');
};
