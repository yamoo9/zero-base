/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/index.js */ \"./src/utils/index.js\");\n\n\n(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.styleLog)(\n  '안녕! 웹팩 😃',\n  `\n    font-size: 4rem;\n    font-weight: bold;\n  `\n);\n\nlet price = 89_000;\n\n(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.test)((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.currency)(price) === `${(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.numberWithComma)(price)}원`);\n\n\n//# sourceURL=webpack://manual-toolchain-configuration/./src/main.js?");

/***/ }),

/***/ "./src/utils/currency.js":
/*!*******************************!*\
  !*** ./src/utils/currency.js ***!
  \*******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currency\": function() { return /* binding */ currency; }\n/* harmony export */ });\n/* harmony import */ var _numberWithComma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberWithComma.js */ \"./src/utils/numberWithComma.js\");\n\n\nconst currency = (price, currencyUnit = '원') => {\n  price = (0,_numberWithComma_js__WEBPACK_IMPORTED_MODULE_0__.numberWithComma)(price);\n  return currencyUnit === '원'\n    ? `${price}${currencyUnit}`\n    : `${currencyUnit}${price}`;\n};\n\n\n//# sourceURL=webpack://manual-toolchain-configuration/./src/utils/currency.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currency\": function() { return /* reexport safe */ _currency_js__WEBPACK_IMPORTED_MODULE_2__.currency; },\n/* harmony export */   \"numberWithComma\": function() { return /* reexport safe */ _numberWithComma_js__WEBPACK_IMPORTED_MODULE_3__.numberWithComma; },\n/* harmony export */   \"styleLog\": function() { return /* reexport safe */ _styleLog_js__WEBPACK_IMPORTED_MODULE_1__.styleLog; },\n/* harmony export */   \"test\": function() { return /* reexport safe */ _test_js__WEBPACK_IMPORTED_MODULE_0__.test; }\n/* harmony export */ });\n/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.js */ \"./src/utils/test.js\");\n/* harmony import */ var _styleLog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleLog.js */ \"./src/utils/styleLog.js\");\n/* harmony import */ var _currency_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency.js */ \"./src/utils/currency.js\");\n/* harmony import */ var _numberWithComma_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numberWithComma.js */ \"./src/utils/numberWithComma.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://manual-toolchain-configuration/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/numberWithComma.js":
/*!**************************************!*\
  !*** ./src/utils/numberWithComma.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"numberWithComma\": function() { return /* binding */ numberWithComma; }\n/* harmony export */ });\nconst numberWithComma = (number) => {\n  return number.toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, '$1,');\n};\n\n\n//# sourceURL=webpack://manual-toolchain-configuration/./src/utils/numberWithComma.js?");

/***/ }),

/***/ "./src/utils/styleLog.js":
/*!*******************************!*\
  !*** ./src/utils/styleLog.js ***!
  \*******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"styleLog\": function() { return /* binding */ styleLog; }\n/* harmony export */ });\nconst styleLog = (message, cssCode) => {\n  console.log(`%c${message}`, cssCode);\n};\n\n\n//# sourceURL=webpack://manual-toolchain-configuration/./src/utils/styleLog.js?");

/***/ }),

/***/ "./src/utils/test.js":
/*!***************************!*\
  !*** ./src/utils/test.js ***!
  \***************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"test\": function() { return /* binding */ test; }\n/* harmony export */ });\nconst test = (condition, ...data) => {\n  console.assert(condition, ...data);\n};\n\n\n//# sourceURL=webpack://manual-toolchain-configuration/./src/utils/test.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;