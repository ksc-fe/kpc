var _Object$create = require("core-js/library/fn/object/create");
var _defaults = require("@babel/runtime-corejs2/helpers/defaults");

var isSupportProto = Object.setPrototypeOf || {}.__proto__;
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = _Object$create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  if (!isSupportProto) {
      _defaults(subClass, superClass);
  }
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;
