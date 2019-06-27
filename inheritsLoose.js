"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _setPrototypeOf = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/set-prototype-of"));

var _create = _interopRequireDefault(require("core-js/library/fn/object/create"));

var _defaults2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defaults"));

var isSupportProto = _setPrototypeOf.default || {}.__proto__;

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = (0, _create.default)(superClass.prototype);
  subClass.prototype.constructor = subClass;

  if (!isSupportProto) {
    (0, _defaults2.default)(subClass, superClass);
  }

  subClass.__proto__ = superClass;
}

var _default = _inheritsLoose;
exports.default = _default;
