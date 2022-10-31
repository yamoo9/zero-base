export var reloadBrowser = function reloadBrowser(target) {
  if (target.nodeType === document.ELEMENT_NODE) {
    target.addEventListener('click', function () {
      location.reload();
    });
  }
};
//# sourceMappingURL=reloadBrowser.js.map