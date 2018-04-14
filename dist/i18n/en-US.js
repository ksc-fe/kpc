(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["i18n"] = factory();
	else
		root["i18n"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
var i18n = {
    // datepicker
    'yearMonthFormat': 'MM YYYY',
    '请选择日期和时间': 'Please select date and time',
    '请选择日期': 'Please select date',
    '1月': 'Jan',
    '2月': 'Feb',
    '3月': 'Mar',
    '4月': 'Apr',
    '5月': 'May',
    '6月': 'Jun',
    '7月': 'Jul',
    '8月': 'Aug',
    '9月': 'Sep',
    '10月': 'Oct',
    '11月': 'Nov',
    '12月': 'Dec',
    '日': 'Sun',
    '一': 'Mon',
    '二': 'Tue',
    '三': 'Wed',
    '四': 'Thu',
    '五': 'Fri',
    '六': 'Sat',
    '{n}年': '{n}',

    // dialog
    '提示': 'Tip',
    '确认': 'OK',
    '取消': 'Cancel',
    '关闭': 'Close',

    // editable
    '编辑': 'Edit',

    // validator
    '必须填写': 'This field is required.',
    '请输入数字': 'Please enter only digits.',
    '请输入正确的邮箱地址': 'Please enter a valid email address.',
    '请输入正确的网址': 'Please enter a valid URL.',
    '请输入正确的日期': 'Please enter a valid date.',
    '请输入正确的日期 (YYYY-MM-DD)': 'Please enter a valid date (ISO).',
    '请输入正确的数': 'Please enter a valid number.',
    '请输入不大于 {n} 的数': 'Please enter a value less than or equal to {n}.',
    '请输入不小于 {n} 的数': 'Please enter a value greater than or equal to {n}.',
    '请输入 {n[0]} 到 {n[1]} 之间的数': 'Please enter a value between {n[0]} and {n[1]}.',
    '请输入步长为 {n} 的数': 'Please enter a number which should be a multipe of {n}',
    '两次输入不一致': 'Please enter the same value again.',
    '两': '2',
    '最多选择 {n} 项': 'Please select no more than {n} item{s:n}.',
    '最多输入 {n} 个字符': 'Please enter no more than {n} character{s:n}.',
    '最少选择 {n} 项': 'Please select at least {n} item{s:n}.',
    '最少输入 {n} 个字符': 'Please enter at least {n} character{s:n}.',
    '请选择 {n} 到 {m} 项': 'Please select {n}~{m} item{s:m}.',
    '请输入 {n} 到 {m} 个字符': 'Please enter {n}~{m} character{s:m}.',

    // pagination
    '{n} 条 / 页': '{n} / page',
    '跳至': 'Goto',
    '页': '',
    '共 {n} 条': 'Total {n}',

    // table
    '/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~': '/(ㄒoㄒ)/~~ No data to display.',

    // transfer
    '请输入': 'Please enter',
    '请选择': 'Please select',
    '已选择': 'Selected'
};

exports.default = i18n;


if (typeof global.Kpc !== 'undefined') {
    Kpc.utils.localize(i18n);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});