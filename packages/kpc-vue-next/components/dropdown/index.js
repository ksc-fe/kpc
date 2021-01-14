import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js/instance/trim";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import Dropdown from './dropdown';
import DropdownMenu from './menu';
import DropdownItem from './item';
import { config, isTextVNode } from '../utils';
var h = Intact.Vdt.miss.h;

var isEmptyString = function isEmptyString(vNode) {
  var _context;

  var type = typeof vNode;
  if (type === 'string') return _trimInstanceProperty(vNode).call(vNode) === '';
  if (type === 'object') return isTextVNode(vNode) && _trimInstanceProperty(_context = vNode.children).call(_context) === '';
  return false;
};

function Wrapper(props, flag) {
  var children = props.children,
      position = props.position,
      key = props.key,
      ref = props.ref,
      rest = _objectWithoutPropertiesLoose(props, ["children", "position", "key", "ref"]); // const [element, menu] = children;
  // ignore whitespaces


  var element;
  var menu;
  var length = children.length;
  var i = 0;

  for (; i < length; i++) {
    element = children[i];

    if (!isEmptyString(element)) {
      break;
    }
  }

  for (i = i + 1; i < length; i++) {
    menu = children[i];

    if (!isEmptyString(menu)) {
      break;
    }
  }

  var dropdown = h(Dropdown, _Object$assign({
    key: key == null ? key : key + ".trigger",
    ref: ref,
    children: [element]
  }, rest));
  menu.props = _Object$assign({
    position: position,
    // indicate that it is use in Dropdown or alone for lookup dropdown instance in _mount
    _useInDropdown: true
  }, rest, {}, menu.props);
  menu.key = key == null ? menu.key : key + ".menu";
  var useWrapper = flag === 'angular' || flag && config.useWrapper;

  if (!useWrapper) {
    return [dropdown, menu];
  }

  return h(DropdownVueWrapper, _Object$assign({
    children: [dropdown, menu]
  }, rest));
}

Wrapper.propTypes = Dropdown.propTypes;
var _className = Intact.Vdt.utils.className;

var DropdownVueWrapper = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(DropdownVueWrapper, _Intact);

  var _super = _createSuper(DropdownVueWrapper);

  function DropdownVueWrapper() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = DropdownVueWrapper.prototype;

  _proto.template = function template(data) {
    var _className2;

    var _data$get = data.get(),
        className = _data$get.className,
        children = _data$get.children,
        rest = _objectWithoutPropertiesLoose(_data$get, ["className", "children"]);

    return h('div', rest, children, _className((_className2 = {
      'k-dropdown': true
    }, _className2[className] = className, _className2)));
  };

  return DropdownVueWrapper;
}(Intact);

var _Wrapper = Intact.functionalWrapper ? Intact.functionalWrapper(Wrapper) : Wrapper;

export default _Wrapper;
export { _Wrapper as Dropdown, DropdownMenu, DropdownItem };