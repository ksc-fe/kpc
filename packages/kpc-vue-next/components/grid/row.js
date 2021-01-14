import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './row.vdt';
import mediaQuery from './mediaQuery';
import { isObject, hasWindow } from '../utils';
import Col from './col';
import { breakpoints } from './utils';
import matchMedia from './mediaMatch';
import '../../styles/kpc.css';
import './index.css';
var enquire;

if (hasWindow) {
  window.matchMedia = matchMedia();
  enquire = require('enquire.js');
}

var responsiveMap = {
  xxl: "(min-width: 0)",
  xl: "(min-width: " + mediaQuery.xlMinWidth + ")",
  lg: "(min-width: " + mediaQuery.lgMinWidth + ")",
  md: "(min-width: " + mediaQuery.mdMinWidth + ")",
  sm: "(min-width: " + mediaQuery.smMinWidth + ")",
  xs: "(max-width: " + mediaQuery.xsMaxWidth + ")"
};
var Row = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Row, _Intact);

  var _super = _createSuper(Row);

  function Row() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.defaults = function defaults() {
    return {
      gutter: 0,
      justify: undefined,
      flex: false,
      align: undefined,
      _gutter: undefined
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.useFlex = false;
    var needKeys = ['justify', 'align', 'flex', 'children'];
    this.on("$receive", function (c, keys) {
      if (_findInstanceProperty(needKeys).call(needKeys, function (key) {
        return _indexOfInstanceProperty(keys).call(keys, key) > -1;
      })) {
        var _this$get = _this.get(),
            flex = _this$get.flex,
            justify = _this$get.justify,
            align = _this$get.align,
            children = _this$get.children;

        _this.useFlex = flex || justify || align; // detect the order property of children

        if (!_this.useFlex && children) {
          var _children = children;

          if (!_Array$isArray(children)) {
            _children = [children];
          }

          for (var i = 0; i < _children.length; i++) {
            var vNode = _children[i];

            if (vNode && vNode.tag === Col) {
              var props = vNode.props;

              if (props.order != null) {
                _this.useFlex = true;
              } else {
                for (var _i = 0; _i < breakpoints.length; _i++) {
                  var breakpoint = breakpoints[_i];

                  if (props[breakpoint] && props[breakpoint].order != null) {
                    _this.useFlex = true;
                    break;
                  }
                }
              }

              if (_this.useFlex) break;
            }
          }
        }
      }
    });
  };

  _proto._create = function _create() {
    var _this2 = this;

    var _loop = function _loop(key) {
      enquire.register(responsiveMap[key], {
        match: function match() {
          var _this2$get = _this2.get(),
              gutter = _this2$get.gutter;

          if (isObject(gutter)) {
            var _Object$assign2;

            _this2.set('_matches', _Object$assign({}, _this2.get('_matches'), (_Object$assign2 = {}, _Object$assign2[key] = true, _Object$assign2)), {
              async: true
            });
          }
        },
        unmatch: function unmatch() {
          var _this2$get2 = _this2.get(),
              gutter = _this2$get2.gutter;

          if (isObject(gutter)) {
            var _Object$assign3;

            _this2.set('_matches', _Object$assign({}, _this2.get('_matches'), (_Object$assign3 = {}, _Object$assign3[key] = false, _Object$assign3)), {
              async: true
            });
          }
        }
      });
    };

    for (var key in responsiveMap) {
      _loop(key);
    }
  };

  _proto._getGutter = function _getGutter() {
    var _this$get2 = this.get(),
        gutter = _this$get2.gutter;

    if (isObject(gutter)) {
      for (var i = 0; i < breakpoints.length; i++) {
        var breakpoint = breakpoints[i];

        if (this.get("_matches." + breakpoint) && gutter[breakpoint] != null) {
          return gutter[breakpoint];
        }
      }

      return 0;
    }

    return gutter;
  };

  _createClass(Row, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return Row;
}(Intact), _defineProperty(_class2, "propTypes", {
  gutter: [String, Number, Object],
  justify: ['start', 'end', 'center', 'between', 'around', 'evenly'],
  align: ['top', 'bottom', 'middle', 'stretch', 'baseline'],
  flex: Boolean
}), _temp), (_applyDecoratedDescriptor(_class.prototype, "template", [_dec], _Object$getOwnPropertyDescriptor(_class.prototype, "template"), _class.prototype)), _class));
export { Row as default };