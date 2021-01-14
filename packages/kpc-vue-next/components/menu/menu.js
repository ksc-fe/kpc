import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _Set from "@babel/runtime-corejs3/core-js/set";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './menu.vdt';
import './index.css';
import '../../styles/kpc.css';
import DropdownMenu from '../dropdown/menu';
var Menu = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_DropdownMenu) {
  _inheritsLoose(Menu, _DropdownMenu);

  var _super = _createSuper(Menu);

  function Menu() {
    return _DropdownMenu.apply(this, arguments) || this;
  }

  var _proto = Menu.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _DropdownMenu.prototype.defaults.call(this), {
      expandedKeys: [],
      selectedKey: '',
      theme: 'dark',
      collapse: false,
      type: 'vertical',
      size: 'default',
      accordion: false,
      dot: false,
      _root: undefined,
      _isFirstFloorChildren: false,
      _highlightedKeys: [],
      _parent: undefined
    });
  };

  _proto._init = function _init() {
    _DropdownMenu.prototype._init.call(this);

    this._expandedKeys = new _Set();
  };

  _proto._mount = function _mount() {
    if (this._isDropdownMenu()) {
      _DropdownMenu.prototype._mount.call(this);
    }
  };

  _proto._beforeUpdate = function _beforeUpdate() {
    this._expandedKeys = new _Set();
  };

  _proto._findParentDropdownMenu = function _findParentDropdownMenu() {
    if (this.get('_isFirstFloorChildren')) {
      return false;
    } else {
      return _DropdownMenu.prototype._findParentDropdownMenu.call(this);
    }
  };

  _proto.isExpanded = function isExpanded(key) {
    var _this$get = this.get(),
        expandedKeys = _this$get.expandedKeys;

    return !Menu.showAsDropdown(this) && _indexOfInstanceProperty(expandedKeys).call(expandedKeys, key) > -1;
  };

  _proto.expand = function expand(key) {
    var _context;

    var expandedKeys = _sliceInstanceProperty(_context = this.get('expandedKeys')).call(_context, 0);

    expandedKeys.push(key);
    this.set('expandedKeys', expandedKeys);
  };

  _proto.shrink = function shrink(key, silent) {
    var _context2;

    var expandedKeys = _sliceInstanceProperty(_context2 = this.get('expandedKeys')).call(_context2, 0);

    var index = _indexOfInstanceProperty(expandedKeys).call(expandedKeys, key);

    _spliceInstanceProperty(expandedKeys).call(expandedKeys, index, 1);

    this.set('expandedKeys', expandedKeys, {
      silent: silent
    });
  };

  _proto.toggleExpand = function toggleExpand(key, menu) {
    var _this = this;

    if (this.isExpanded(key)) {
      this.shrink(key);
    } else if (!this.get('accordion')) {
      this.expand(key);
    } else {
      var _expandedKeys = menu._expandedKeys;

      _forEachInstanceProperty(_expandedKeys).call(_expandedKeys, function (key) {
        _this.shrink(key, true);
      });

      this.expand(key);
    }
  };

  _proto.select = function select(key) {
    this.set('selectedKey', key);
  };

  _proto.isSelected = function isSelected(key) {
    return this.get('selectedKey') === key;
  };

  _proto.isHighlighted = function isHighlighted(key) {
    var _context3;

    return _indexOfInstanceProperty(_context3 = this.get('_highlightedKeys')).call(_context3, key) > -1;
  };

  _proto._isDropdownMenu = function _isDropdownMenu() {
    var _root = this.get('_root');

    return _root && Menu.showAsDropdown(_root);
  };

  return Menu;
}(DropdownMenu), _defineProperty(_class2, "template", template), _defineProperty(_class2, "blocks", ['header']), _defineProperty(_class2, "showAsDropdown", function (_root) {
  return _root.get('collapse') || _root.get('type') === 'horizontal';
}), _defineProperty(_class2, "propTypes", _Object$assign({}, DropdownMenu.propTypes, {
  expandedKeys: Array,
  selectedKey: String,
  theme: ['light', 'dark'],
  collapse: Boolean,
  type: ['vertical', 'horizontal'],
  size: ['large', 'default', 'small'],
  accordion: Boolean,
  dot: Boolean
})), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Menu as default };