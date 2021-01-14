import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/includes";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js/instance/trim";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find";
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
import template from './index.vdt';
import Select from '../select';
import '../../styles/kpc.css';
import './index.css';
import { toggleArray, isStringOrNumber, isNullOrUndefined } from '../utils';
var TreeSelect = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Select) {
  _inheritsLoose(TreeSelect, _Select);

  var _super = _createSuper(TreeSelect);

  function TreeSelect() {
    return _Select.apply(this, arguments) || this;
  }

  var _proto = TreeSelect.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _Select.prototype.defaults.call(this), {
      data: [],
      checkbox: false,
      load: undefined,
      filter: undefined,
      uncorrelated: false,
      defaultExpandAll: true,
      _selectedKeys: [],
      _treeCheckedKeys: []
    });
  };

  _proto._init = function _init() {
    var _this = this;

    _Select.prototype._init.call(this);

    var onChangeValue = function onChangeValue(v) {
      if (!_this._isMultiple()) {
        v = isNullOrUndefined(v) ? [] : [v];
      }

      _this.set({
        '_selectedKeys': v,
        '_treeCheckedKeys': v
      }, {
        async: true
      });
    };

    this.on('$change:value', function (c, v) {
      onChangeValue(v);
    });
    onChangeValue(this.get('value'));
  };

  _proto._isMultiple = function _isMultiple() {
    var _this$get = this.get(),
        checkbox = _this$get.checkbox,
        multiple = _this$get.multiple;

    return checkbox || multiple;
  };

  _proto._initLabels = function _initLabels() {
    var _this2 = this;

    var _this$get2 = this.get(),
        data = _this$get2.data,
        value = _this$get2.value,
        checkbox = _this$get2.checkbox;

    this.label = null;
    var labels = this.labels = [];
    if (!data || value === undefined) return;

    var multiple = this._isMultiple();

    var counts = 0;

    var loop = function loop(children) {
      return _findInstanceProperty(children).call(children, function (item) {
        if (!multiple) {
          if (item.key === value) {
            _this2.label = item.label;
            return true;
          }
        } else {
          var index;

          if (value && (index = _indexOfInstanceProperty(value).call(value, item.key)) > -1) {
            // keep the order
            labels[index] = item.label;

            if (++counts === value.length) {
              return true;
            }
          }
        }

        if (item.children) {
          return loop(item.children);
        }

        return false;
      });
    };

    loop(data);
  };

  _proto._select = function _select(node, e) {
    var _this$get3 = this.get(),
        checkbox = _this$get3.checkbox,
        _treeCheckedKeys = _this$get3._treeCheckedKeys;

    var key = node.key;

    if (!checkbox) {
      this._onSelect(key);

      if (!this._isMultiple()) {
        this.refs.menu.hide(true);
      }
    } else {
      // check on click
      this.refs.tree._toggleCheck(node, e);
    }
  };

  _proto._onCheckedKeysChange = function _onCheckedKeysChange(tree, keys) {
    if (!this.get('checkbox')) return;

    var value = this._getAllCheckedKeys(tree); // to make bellow do not update tree


    tree.set('checkedKeys', value, {
      silent: true
    });
    this.set({
      _treeCheckedKeys: value,
      value: value
    });
  };

  _proto._getAllCheckedKeys = function _getAllCheckedKeys(tree) {
    var keys = [];

    var loop = function loop(children) {
      for (var i = 0; i < children.length; i++) {
        var node = children[i];

        if (node.checked) {
          keys.push(node.key);
          continue;
        }

        if (node.children) {
          loop(node.children);
        }
      }
    };

    loop(tree.root.children);
    return keys;
  };

  _proto._filter = function _filter(data) {
    var _context, _context2;

    var keywords = this.get('keywords');
    if (!keywords || !(keywords = _trimInstanceProperty(keywords).call(keywords))) return true;
    var filter = this.get('filter');
    if (filter) return filter.call(this, keywords, data);
    keywords = keywords.toLowerCase();
    return _includesInstanceProperty(_context = data.label.toLowerCase()).call(_context, keywords) || isStringOrNumber(data.key) && _includesInstanceProperty(_context2 = String(data.key).toLowerCase()).call(_context2, keywords);
  };

  return TreeSelect;
}(Select), _defineProperty(_class2, "template", template), _defineProperty(_class2, "propTypes", _Object$assign({}, Select.propTypes, {
  data: {
    validator: function validator(value) {
      /* istanbul ignore next */
      if (!_Array$isArray(value)) {
        return "\"data\" must be an Array.";
      } else {
        var msg;

        var loop = function loop(children) {
          if (!children) return true;

          for (var i = 0; i < children.length; i++) {
            var item = children[i];
            if (typeof item !== 'object') return msg = "the item of \"data\" must be an object.";
            if (item.key == null) return msg = "each object in \"data\" must have the \"key\" property.";

            if (loop(item.children) !== true) {
              break;
            }
          }

          return true;
        };

        loop(value);

        if (msg) {
          return msg;
        }

        return true;
      }
    }
  },
  checkbox: Boolean,
  load: Function,
  uncorrelated: Boolean,
  defaultExpandAll: Boolean
})), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { TreeSelect as default };
export { TreeSelect };