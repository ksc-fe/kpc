import _Object$create from "core-js/library/fn/object/create";
import _defaults from "@babel/runtime-corejs2/helpers/defaults";

var isSupportProto = Object.setPrototypeOf || {}.__proto__;
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = _Object$create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  if (!isSupportProto) {
      _defaults(subClass, superClass);
  }
  subClass.__proto__ = superClass;
}

export default _inheritsLoose;
