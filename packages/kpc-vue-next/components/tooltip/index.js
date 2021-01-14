import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Created by sylvia on 2017/10/31.
 */
import Intact from 'intact-vue';
import Tooltip from './tooltip';
import TooltipContent from './content';
import { config } from '../utils';
var h = Intact.Vdt.miss.h;

function Wrapper(props, flag) {
  var children = props.children,
      content = props.content,
      _blocks = props._blocks,
      _context = props._context,
      ref = props.ref,
      rest = _objectWithoutPropertiesLoose(props, ["children", "content", "_blocks", "_context", "ref"]);

  if (_blocks && _blocks.content) {
    content = _blocks.content.call(_context);
  }

  var contentVNode = h(TooltipContent, _Object$assign({
    _context: _context,
    children: content,
    ref: ref,
    _useInDropdown: true
  }, rest));
  var useWrapper = flag === 'angular' || flag && config.useWrapper;

  if (!useWrapper) {
    return [h(Tooltip, _Object$assign({
      _context: _context,
      children: children
    }, rest, {
      className: 'k-tooltip'
    })), contentVNode];
  }

  return h(TooltipVueWrapper, _Object$assign({
    children: [h(Tooltip, _Object$assign({
      _context: _context,
      children: children
    }, props.trigger ? {
      trigger: props.trigger
    } : {})), contentVNode]
  }, rest));
} // add blocks declaration for Angular


Wrapper.blocks = ['content']; // for vue Boolean cast

Wrapper.propTypes = TooltipContent.propTypes;
var _className = Intact.Vdt.utils.className;

var TooltipVueWrapper = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(TooltipVueWrapper, _Intact);

  var _super = _createSuper(TooltipVueWrapper);

  function TooltipVueWrapper() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = TooltipVueWrapper.prototype;

  _proto.template = function template(data) {
    var _className2;

    var _data$get = data.get(),
        className = _data$get.className,
        children = _data$get.children,
        rest = _objectWithoutPropertiesLoose(_data$get, ["className", "children"]);

    return h('div', rest, children, _className((_className2 = {
      'k-tooltip': true
    }, _className2[className] = className, _className2)));
  };

  return TooltipVueWrapper;
}(Intact);

var _Wrapper = Intact.functionalWrapper ? Intact.functionalWrapper(Wrapper) : Wrapper;

export default _Wrapper;
export { _Wrapper as Tooltip };