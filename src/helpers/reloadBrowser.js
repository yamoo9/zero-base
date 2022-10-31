export const reloadBrowser = (target) => {
  if (target.nodeType === document.ELEMENT_NODE) {
    target.addEventListener('click', () => {
      location.reload();
    });
  }
};
