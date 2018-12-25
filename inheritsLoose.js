var _Object$create = require("core-js/library/fn/object/create");
var _defaults = require("@babel/runtime-corejs2/helpers/defaults");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = _Object$create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  if (!Object.setPrototypeOf && !{}.__proto__) {
      _defaults(subClass, superClass);
  }
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;
