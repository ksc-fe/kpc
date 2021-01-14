import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import { DShape } from './shape';
var shapes = {
  Diamond: {
    width: 80,
    height: 80,
    stylesheet: 'rhombus;whiteSpace=wrap;html=1;'
  },
  Triangle: {
    width: 60,
    height: 80,
    stylesheet: 'triangle;whiteSpace=wrap;html=1;'
  },
  Cylinder: {
    width: 60,
    height: 80,
    stylesheet: 'shape=cylinder;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;'
  },
  Cloud: {
    width: 120,
    height: 80,
    stylesheet: 'ellipse;shape=cloud;whiteSpace=wrap;html=1;'
  }
};
var components = {};

var _loop = function _loop(key) {
  var _class, _temp;

  var value = shapes[key];
  components[key] = (_temp = _class = /*#__PURE__*/function (_DShape) {
    _inheritsLoose(_class, _DShape);

    var _super = _createSuper(_class);

    function _class() {
      return _DShape.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.defaults = function defaults() {
      return _Object$assign({}, _DShape.prototype.defaults.call(this), {
        width: value.width,
        height: value.height
      });
    };

    _proto._getStylesheet = function _getStylesheet() {
      return value.stylesheet;
    };

    return _class;
  }(DShape), _defineProperty(_class, "displayName", "D" + key), _temp);
};

for (var key in shapes) {
  _loop(key);
}

export default components;