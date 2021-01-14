import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _setTimeout from "@babel/runtime-corejs3/core-js/set-timeout";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";
import _everyInstanceProperty from "@babel/runtime-corejs3/core-js/instance/every";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import DropdownMenu from '../dropdown/menu';
import _position from '../moveWrapper/position';
import template from './content.vdt';
import '../../styles/kpc.css';
import './index.css';
import { findParentComponent, _$, clamp } from '../utils';
var Types = Intact.Vdt.miss.Types;

var isEmptyChildren = function isEmptyChildren(vNodes) {
  if (!vNodes) return true;

  if (_Array$isArray(vNodes)) {
    return _everyInstanceProperty(vNodes).call(vNodes, function (vNode) {
      return isEmptyChildren(vNode);
    });
  }

  if (vNodes.type === Types.Text) {
    return !vNodes.children;
  }
};

var TooltipContent = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_DropdownMenu) {
  _inheritsLoose(TooltipContent, _DropdownMenu);

  var _super = _createSuper(TooltipContent);

  function TooltipContent() {
    return _DropdownMenu.apply(this, arguments) || this;
  }

  var _proto = TooltipContent.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _DropdownMenu.prototype.defaults.call(this), {
      canHover: false,
      showArrow: true,
      transition: 'c-fade',
      confirm: false,
      okText: _$('确定'),
      cancelText: _$('取消'),
      theme: 'dark',
      disabled: false,
      always: false,
      size: 'default',
      _feedback: {}
    });
  };

  _proto._init = function _init() {
    var _this = this;

    _DropdownMenu.prototype._init.call(this);

    this.on('$change:value', function (c, value) {
      _this.trigger(value ? 'beforeShow' : 'beforeHide', _this);
    });
    this.on('$receive:children', function (c, vNodes) {
      _this.isEmptyChildren = isEmptyChildren(vNodes);
    });
  };

  _proto._mount = function _mount() {
    _DropdownMenu.prototype._mount.call(this);

    if (this.get('value') && !this.isEmptyChildren) {
      this.position('none');

      this._addDocumentEvents();
    }
  };

  _proto.show = function show() {
    // don't show if content is empty
    if (this.get('disabled') || this.isEmptyChildren) return;
    clearTimeout(this.timer);
    this.set('value', true);
  };

  _proto.hide = function hide(immediately) {
    var _this2 = this;

    if (!immediately && (this.get('canHover') || this.get('confirm'))) {
      this.timer = _setTimeout(function () {
        _this2.set('value', false);
      }, 200);
    } else {
      this.set('value', false);
    }
  };

  _proto.position = function position(collision) {
    var _this3 = this;

    if (collision === void 0) {
      collision = 'flipfit';
    }

    var pos = this.get('position');

    if (typeof pos === 'string') {
      switch (pos) {
        case 'left':
          pos = {
            my: 'right-10 center',
            at: 'left center'
          };
          break;

        case 'bottom':
          pos = {
            my: 'center top+10',
            at: 'center bottom'
          };
          break;

        case 'right':
          pos = {
            my: 'left+10 center',
            at: 'right center'
          };
          break;

        default:
          pos = {
            my: 'center bottom-10',
            at: 'center top'
          };
          break;
      }
    }

    var element = this.refs.menu.element;

    _position(element, _Object$assign({
      my: 'center bottom-10',
      at: 'center top',
      of: this.dropdown.element,
      collision: collision,
      using: function using(feedback) {
        _this3.set('_feedback', feedback);

        if (!_this3.get('showArrow')) return;
        var arrow = _this3.refs.arrow;
        var target = feedback.target,
            element = feedback.element;

        if (feedback.important === 'vertical') {
          var arrowWidth = arrow.offsetWidth;
          var left;

          if (feedback.horizontal === 'center') {
            left = (element.width - arrowWidth) / 2;
          } else {
            left = target.left - element.left + (target.width - arrowWidth) / 2;
          }

          left = clamp(left, 1, element.width - 1 - arrowWidth);
          arrow.setAttribute('style', "left: " + left + "px");
        } else {
          var arrowHeight = arrow.offsetHeight;
          var top;

          if (feedback.vertical === 'middle') {
            top = (element.height - arrowHeight) / 2;
          } else {
            top = target.top - element.top + target.height / 2 - arrowHeight / 2;
          }

          top = clamp(top, 1, element.height - 1 - arrowHeight);
          arrow.setAttribute('style', "top: " + top + "px");
        }
      }
    }, pos));
  };

  _proto._findParentDropdownMenu = function _findParentDropdownMenu() {
    return findParentComponent(TooltipContent, this, true);
  };

  _proto._cancel = function _cancel() {
    this.trigger('cancel', this);
    this.hide(true);
  };

  _proto._ok = function _ok() {
    this.trigger('ok', this);
    this.hide(true);
  };

  _proto._onDocumentClick = function _onDocumentClick(e) {
    if (this.get('always')) return;

    _DropdownMenu.prototype._onDocumentClick.call(this, e);
  };

  _proto._removeDocumentEvents = function _removeDocumentEvents() {
    // because disabled property can hide layer, so we should set the value
    // to false to let it hide also on next update with disabled is true, #443
    this.set('value', false);

    _DropdownMenu.prototype._removeDocumentEvents.call(this);
  };

  return TooltipContent;
}(DropdownMenu), _defineProperty(_class2, "template", template), _defineProperty(_class2, "propTypes", _Object$assign({}, DropdownMenu.propTypes, {
  canHover: Boolean,
  showArrow: Boolean,
  position: [Object, 'left', 'bottom', 'right', 'top'],
  confirm: Boolean,
  okText: String,
  cancelText: String,
  theme: ['dark', 'light'],
  disabled: Boolean,
  always: Boolean,
  size: ['small', 'default']
})), _defineProperty(_class2, "events", _Object$assign({}, DropdownMenu.events, {
  beforeShow: true,
  beforeHide: true,
  cancel: true,
  ok: true
})), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { TooltipContent as default };