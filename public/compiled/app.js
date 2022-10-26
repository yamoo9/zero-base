"use strict";

(function (_ref) {
  var navigator = _ref.navigator;
  var userAgent = navigator.userAgent;

  var isIOS = function isIOS() {
    return userAgent.toLowerCase().includes('ios');
  };
  console.log(isIOS());
})(window);
