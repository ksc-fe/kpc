var _Object$create = require("@babel/runtime-corejs3/core-js/object/create");
var _Object$setPrototypeOf = require("@babel/runtime-corejs3/core-js/object/set-prototype-of");
var _defaults = require("@babel/runtime-corejs3/helpers/defaults");

var isSupportProto = _Object$setPrototypeOf || {}.__proto__;

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = _Object$create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  if (!isSupportProto) {
    _defaults(subClass, superClass); 
  }

  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;
