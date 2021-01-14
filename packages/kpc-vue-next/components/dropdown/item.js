import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './item.vdt';
import Dropdown from './dropdown';
import DropdownMenu from './menu';
import { findParentComponent } from '../utils';
var DropdownItem = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(DropdownItem, _Intact);

  var _super = _createSuper(DropdownItem);

  function DropdownItem() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = DropdownItem.prototype;

  _proto.defaults = function defaults() {
    return {
      disabled: false,
      hideOnSelect: true,
      _isFocus: false
    };
  };

  _proto._init = function _init() {
    var _this = this;

    // if selected hide all dropdown menu
    this.on('select', function () {
      if (_this.get('hideOnSelect')) {
        var ancestor = _this._findAncestorDropdownMenu();

        ancestor.hide(true);
      }
    });
  };

  _proto._mount = function _mount() {
    var parent = this.parent = this._findAncestorDropdownMenu(true);

    if (parent) {
      parent.items.push(this);
    }
  };

  _proto._onClick = function _onClick(e) {
    if (this.get('disabled')) return; // in IE, if the event has not call stopImmediatePropagation,
    // the document click will also be called after it has been removed

    e.stopPropagation();
    this.trigger('click', e); // is not a sub dropdown trigger

    if (this.parentVNode.tag !== Dropdown) {
      this.trigger('select', this, e);
    }
  };

  _proto._onMouseEnter = function _onMouseEnter(e) {
    this.trigger('mouseenter', e);
    if (this.get('disabled')) return;
    this.parent.focusItem(this);
  };

  _proto._onMouseLeave = function _onMouseLeave(e) {
    this.trigger('mouseleave', e);
    this.parent.unFocusLastItem(); // if (this.get('disabled')) return;
  };

  _proto.select = function select(e, isFocus) {
    // is not a sub dropdown trigger
    var dropdown = this._isSubMenu();

    this.trigger('click', e);

    if (!dropdown) {
      this.trigger('select', this, e);
    } else {
      dropdown.show(null, null, isFocus);
    }
  };

  _proto.focus = function focus() {
    this.set('_isFocus', true);
    var elRect = this.element.getBoundingClientRect();
    var menuEl = this.parent.refs.menu.element;
    var pEl = getScrollParent(this.element.parentNode, menuEl);
    var pElRect = pEl.getBoundingClientRect();
    var bottomOverflowDistance = elRect.bottom - pElRect.bottom;
    var topOverflowDistance = elRect.top - pElRect.top;

    if (bottomOverflowDistance > 0) {
      pEl.scrollTop += bottomOverflowDistance;
    } else if (topOverflowDistance < 0) {
      pEl.scrollTop += topOverflowDistance;
    }
  };

  _proto.unFocus = function unFocus() {
    return this.set('_isFocus', false); // const dropdown = this._isSubMenu();
    // if (dropdown) {
    // dropdown.hide(null, null, true);
    // }
  };

  _proto.showMenuAndFocus = function showMenuAndFocus(e) {
    var dropdown = this._isSubMenu();

    if (dropdown) {
      this.select(e, true);
    }
  };

  _proto.hideMenu = function hideMenu() {
    var dropdown = this._isSubMenu();

    if (dropdown) {
      dropdown.hide(null, null, true);
    }
  };

  _proto._isSubMenu = function _isSubMenu() {
    if (this.parentVNode.tag === Dropdown) {
      return this.parentVNode.children;
    }
  };

  _proto._findAncestorDropdownMenu = function _findAncestorDropdownMenu(isFirst) {
    return findParentComponent(DropdownMenu, this, isFirst);
  };

  _proto._destroy = function _destroy() {
    if (this.parent) {
      var items = this.parent.items;

      _spliceInstanceProperty(items).call(items, _indexOfInstanceProperty(items).call(items, this), 1);
    }
  };

  return DropdownItem;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "propTypes", {
  disabled: Boolean,
  hideOnSelect: Boolean
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { DropdownItem as default };

function getScrollParent(node, breakEl) {
  if (node === breakEl || node.scrollHeight > node.clientHeight) return node;
  return getScrollParent(node.parentNode, breakEl);
}