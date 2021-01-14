import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _Array$from from "@babel/runtime-corejs3/core-js/array/from";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _Set from "@babel/runtime-corejs3/core-js/set";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './item.vdt';
import DropdownItem from '../dropdown/item';
import Dropdown from '../dropdown/dropdown';
import Menu from './menu';
import { findRouter, isExternalLink } from '../utils';

var Wrapper = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Wrapper, _Intact);

  var _super = _createSuper(Wrapper);

  function Wrapper() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Wrapper.prototype;

  _proto.template = function template(data) {
    return data.get('children');
  };

  return Wrapper;
}(Intact);

var MenuItem = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_DropdownItem) {
  _inheritsLoose(MenuItem, _DropdownItem);

  var _super2 = _createSuper(MenuItem);

  function MenuItem() {
    return _DropdownItem.apply(this, arguments) || this;
  }

  var _proto2 = MenuItem.prototype;

  _proto2.defaults = function defaults() {
    return _Object$assign({}, _DropdownItem.prototype.defaults.call(this), {
      key: undefined,
      to: undefined,
      dot: false,
      _root: undefined,
      _isFirstFloorChildren: false,
      _show: false,
      _parentItem: undefined,
      _parentMenu: undefined
    });
  };

  _proto2._init = function _init() {
    var _this = this;

    this.Wrapper = Wrapper; // if selected hide all dropdown menu
    // the top ancestor dropdown menu can not hide
    // so we override the method here

    this.on('select', function () {
      if (!_this.get('_isFirstFloorChildren') && _this.get('hideOnSelect')) {
        var ancestor;
        var parent = _this.parentVNode;

        while (parent) {
          var tag = parent.tag;

          if (tag === Menu && parent.props._isFirstFloorChildren) {
            ancestor = parent.children;
            break;
          }

          parent = parent.parentVNode;
        }

        ancestor.hide(true);
      }
    });
  };

  _proto2._beforeCreate = function _beforeCreate() {
    // we must do this in _beforeCreate method for Angular
    var _root = this.get('_root');

    this._updateStatus(_root, _root.get('selectedKey'));

    _root.on('$change:selectedKey', this._updateStatus);
  };

  _proto2._mount = function _mount() {
    _DropdownItem.prototype._mount.call(this);

    this.$router = findRouter(this);
  };

  _proto2._updateStatus = function _updateStatus(c, v) {
    if (v === this.get('key')) {
      var items = [];
      var parentItem = this.get('_parentItem');

      while (parentItem) {
        items.push(parentItem);
        parentItem = parentItem.get('_parentItem');
      }

      var expandedKeys = new _Set(c.get('expandedKeys'));

      var _highlightedKeys = _mapInstanceProperty(items).call(items, function (item) {
        var key = item.get('key');
        expandedKeys.add(key);
        return key;
      });

      c.set({
        _highlightedKeys: _highlightedKeys,
        expandedKeys: _Array$from(expandedKeys)
      });
    }
  };

  _proto2._onClick = function _onClick(hasSubMenu, e) {
    if (this.get('disabled')) return;
    var root = this.get('_root');
    var menu = this.get('_parentMenu');

    if (hasSubMenu) {
      root.toggleExpand(this.get('key'), menu);
    } else {
      root.select(this.get('key'));
    }

    this.trigger('click', e);

    if (!hasSubMenu) {
      this.trigger('select', this, e);
      var to = this.get('to');

      if (to) {
        if (this.$router && !isExternalLink(to)) {
          this.$router.push(to);
        } else {
          location.href = to;
        }
      }
    }
  };

  _proto2.focus = function focus() {
    if (this._isDropdownItem()) {
      _DropdownItem.prototype.focus.call(this);
    } else {
      this.set('_isFocus', true);
    }
  };

  _proto2._isDropdownItem = function _isDropdownItem() {
    var _this$get = this.get(),
        _root = _this$get._root,
        _isFirstFloorChildren = _this$get._isFirstFloorChildren;

    return !_isFirstFloorChildren && Menu.showAsDropdown(_root);
  };

  _proto2._onDropdownShowChange = function _onDropdownShowChange(c, v) {
    this.set('_show', v);
  };

  _proto2._destroy = function _destroy() {
    // because we cloned this vNode, the original instance need not to be destroyed
    if (this._isAngular) return;
    this.get('_root').off('$change:selectedKey', this._updateStatus);

    _DropdownItem.prototype._destroy.call(this);
  };

  return MenuItem;
}(DropdownItem), _defineProperty(_class2, "template", template), _defineProperty(_class2, "propTypes", _Object$assign({}, DropdownItem.propTypes, {
  key: {
    type: String,
    required: true
  },
  to: [String, Object],
  dot: Boolean
})), _defineProperty(_class2, "events", {
  click: true,
  select: true
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { MenuItem as default };