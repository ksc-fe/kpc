import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import { isTextChildren, findParentComponent } from '../utils';
import DropdownMenu from './menu';
import '../../styles/kpc.css';
import './index.css';
var _Intact$Vdt$miss = Intact.Vdt.miss,
    clone = _Intact$Vdt$miss.clone,
    Types = _Intact$Vdt$miss.Types,
    h = _Intact$Vdt$miss.h;
var _className = Intact.Vdt.utils.className;
var Dropdown = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Dropdown, _Intact);

  var _super = _createSuper(Dropdown);

  function Dropdown() {
    return _Intact.apply(this, arguments) || this;
  }

  Dropdown.template = function template(data) {
    var _className2;

    var vNode = data.get('children');
    var isShow = data.get('_isShow');
    var className = vNode.className || vNode.props.className;
    var extraProps = {
      className: _className((_className2 = {}, _className2[className] = className, _className2['k-dropdown-open'] = isShow, _className2))
    };
    var style = data.get('style');

    if (style) {
      extraProps.style = style;
    } // vNode.props = {...vNode.props, ...extraProps};
    // return vNode;
    // we need clone it again, even if we have cloned it in _saveOriginalEvents


    return clone(vNode, extraProps);
  };

  var _proto = Dropdown.prototype;

  _proto.defaults = function defaults() {
    return {
      trigger: 'hover',
      disabled: false,
      _isShow: false
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.on('$receive:children', function () {
      _this._saveOriginalEvents();
    }, {
      keep: true
    });
  };

  _proto._saveOriginalEvents = function _saveOriginalEvents() {
    var _context;

    var _this$get = this.get(),
        children = _this$get.children,
        trigger = _this$get.trigger,
        className = _this$get.className,
        rest = _objectWithoutPropertiesLoose(_this$get, ["children", "trigger", "className"]);

    if (_Array$isArray(children)) {
      children = children[0];
    }

    if (isTextChildren(children)) {
      children = h('span', rest, children, className);
    } // save the original event


    var originProps = _Object$assign({}, children.props);

    var hasSaved = false;

    if (!originProps._evHasSaved) {
      if (originProps.vueVNode) {
        // for vue element
        var data = originProps.vueVNode.data;
        var on = data && data.on || {};
        originProps._evClick = on.click;
        originProps._evMouseEnter = on.mouseenter;
        originProps._evMouseLeave = on.mouseleave; // children.className = undefined;
      } else if (originProps.reactVNode) {
        // for react element
        var _props = originProps.reactVNode.props;
        originProps._evClick = _props.onClick;
        originProps._evMouseEnter = _props.onMouseEnter;
        originProps._evMouseLeave = _props.onMouseLeave;
      } else {
        originProps._evClick = originProps['ev-click'];
        originProps._evMouseEnter = originProps['ev-mouseenter'];
        originProps._evMouseLeave = originProps['ev-mouseleave'];
      }

      hasSaved = true;
    }

    var props = {}; // if (trigger === 'click') {

    props['ev-click'] = _bindInstanceProperty(_context = this.show).call(_context, this, originProps._evClick); // } else {

    if (trigger === 'hover') {
      var _context2, _context3;

      props['ev-mouseenter'] = _bindInstanceProperty(_context2 = this.show).call(_context2, this, originProps._evMouseEnter);
      props['ev-mouseleave'] = _bindInstanceProperty(_context3 = this.hide).call(_context3, this, originProps._evMouseLeave);
    }

    if (hasSaved) {
      props._evHasSaved = true;
    } // clone vNode, because the vNode may be used multiple times,
    // such as in vue slot, #547


    children = clone(children, props); // children.props = {...originProps, ...props};

    this.set('children', children, {
      silent: true
    });
  };

  _proto._mount = function _mount() {
    // add instance to dom, for menu to get it by previousSibling
    this.element._dropdown = this;
  };

  _proto.show = function show(fn, e, isFocus) {
    if (typeof fn === 'function') fn(e);
    if (this.get('disabled') || e && e._hide === this) return;
    var menu = this.menu;
    menu.__event = e;
    menu.show();

    if (isFocus) {
      menu.focusItemByIndex(0);
    }
  };

  _proto.hide = function hide(fn, e, immediately) {
    if (typeof fn === 'function') fn(e);
    if (this.get('disabled')) return;
    var menu = this.menu;
    menu.hide(immediately);
  };

  return Dropdown;
}(Intact), _defineProperty(_class2, "propTypes", {
  trigger: ['hover', 'click'],
  disabled: Boolean
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], _Object$getOwnPropertyDescriptor(_class, "template"), _class)), _class));
export { Dropdown as default };