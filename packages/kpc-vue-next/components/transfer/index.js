import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/reduce";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js/instance/filter";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/includes";
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
import '../../styles/kpc.css';
import './index.css';
import { _$ } from '../utils';
var Transfer = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Transfer, _Intact);

  var _super = _createSuper(Transfer);

  function Transfer() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Transfer.prototype;

  _proto.defaults = function defaults() {
    var _this = this;

    return {
      data: [],
      value: [],
      leftChecked: [],
      rightChecked: [],
      filterable: false,
      filter: function filter(data, keywords) {
        var _context;

        return _includesInstanceProperty(_context = data.label).call(_context, keywords);
      },
      label: function label(data, index) {
        return data.label;
      },
      keyName: 'key',
      placeholder: _$('请输入'),
      leftTitle: _$('请选择'),
      rightTitle: _$('已选择'),
      enableAdd: function enableAdd() {
        return _this.get('leftChecked').length;
      },
      enableRemove: function enableRemove() {
        return _this.get('rightChecked').length;
      },
      selectedKeys: [],
      leftCheckedKeys: [],
      rightCheckedKeys: []
    };
  };

  _proto._init = function _init() {
    var _this2 = this,
        _context2;

    var fixValue = function fixValue(v) {
      if (!_Array$isArray(v)) {
        _this2.set('value', [], {
          silent: true
        });
      }
    };

    this.on('$receive:value', function (c, v) {
      return fixValue(v);
    }); // keep the keys consistence with the conresponding value

    var setKeys = function setKeys(key, value) {
      var keyName = _this2.get('keyName');

      _this2.set(key, _mapInstanceProperty(value).call(value, function (item) {
        return item[keyName];
      }));
    };

    var setValues = function setValues(key, value, list) {
      var keyName = _this2.get('keyName');

      _this2.set(key, _filterInstanceProperty(list).call(list, function (item) {
        return ~_indexOfInstanceProperty(value).call(value, item[keyName]);
      }));
    }; // maybe the value is undefined, but above $receive:value is called after this


    fixValue(this.get('value'));
    setKeys('selectedKeys', this.get('value'));
    this.on('$change:value', function (c, v) {
      return setKeys('selectedKeys', v);
    });

    _forEachInstanceProperty(_context2 = [['leftCheckedKeys', 'leftChecked', 'data'], ['rightCheckedKeys', 'rightChecked', 'value']]).call(_context2, function (_ref) {
      var key = _ref[0],
          value = _ref[1],
          list = _ref[2];

      _this2.on("$receive:" + value, function (c, v) {
        return setKeys(key, v);
      });

      _this2.on("$change:" + key, function (c, v) {
        return setValues(value, v, _this2.get(list));
      });
    }); // only change the left status, reserve the right status


    this.on('$receive:data', function (c, v) {
      if (!v || !v.length) {
        _this2.set({
          leftCheckedKeys: []
        });
      } else {
        var _this2$get = _this2.get(),
            leftCheckedKeys = _this2$get.leftCheckedKeys,
            keyName = _this2$get.keyName;

        var allKeys = _reduceInstanceProperty(v).call(v, function (memo, item) {
          memo[item[keyName]] = true;
          return memo;
        }, {});

        var fix = function fix(keys) {
          var ret = [];

          if (keys) {
            _forEachInstanceProperty(keys).call(keys, function (key) {
              if (allKeys[key]) {
                ret.push(key);
              }
            });
          }

          return ret;
        };

        _this2.set({
          leftCheckedKeys: fix(leftCheckedKeys)
        });
      }
    });
  };

  _proto._add = function _add() {
    var _this$get = this.get(),
        data = _this$get.data,
        value = _this$get.value,
        leftCheckedKeys = _this$get.leftCheckedKeys,
        keyName = _this$get.keyName;

    value = _concatInstanceProperty(value).call(value, _filterInstanceProperty(data).call(data, function (item) {
      return ~_indexOfInstanceProperty(leftCheckedKeys).call(leftCheckedKeys, item[keyName]);
    }));
    this.set({
      leftCheckedKeys: [],
      value: value
    });
    this.trigger('add');
  };

  _proto._remove = function _remove() {
    var _this$get2 = this.get(),
        value = _this$get2.value,
        rightCheckedKeys = _this$get2.rightCheckedKeys,
        keyName = _this$get2.keyName;

    value = _filterInstanceProperty(value).call(value, function (item) {
      return !~_indexOfInstanceProperty(rightCheckedKeys).call(rightCheckedKeys, item[keyName]);
    });
    this.set({
      rightCheckedKeys: [],
      value: value
    });
    this.trigger('remove');
  };

  _proto._onCheckboxChange = function _onCheckboxChange(type, index, e) {
    if (this.startIndex === undefined || !e.shiftKey) {
      this.startIndex = index;
      this.endIndex = undefined;
      this.checked = e.target.checked;
    } else if (e.shiftKey) {
      var _context3;

      e.preventDefault();

      var values = this._getShowedData(type);

      var checkedKeys = _sliceInstanceProperty(_context3 = this.get(type + "CheckedKeys")).call(_context3, 0);

      var lastEndIndex = this.endIndex;
      var keyName = this.get('keyName');
      this.endIndex = index;

      var update = function update(data, isCheck) {
        _forEachInstanceProperty(data).call(data, function (item) {
          if (!item.disabled) {
            var key = item[keyName];

            var _index = _indexOfInstanceProperty(checkedKeys).call(checkedKeys, key);

            if (isCheck) {
              if (!~_index) {
                checkedKeys.push(key);
              }
            } else {
              if (~_index) {
                _spliceInstanceProperty(checkedKeys).call(checkedKeys, _index, 1);
              }
            }
          }
        });
      };

      if (lastEndIndex !== undefined) {
        // if exists lastEndIndex, we reset the last result
        // and set it again
        update(_sliceInstanceProperty(values).call(values, Math.min(index, lastEndIndex), Math.max(index, lastEndIndex) + 1), !this.checked);
      }

      update(_sliceInstanceProperty(values).call(values, Math.min(index, this.startIndex), Math.max(index, this.startIndex) + 1), this.checked);
      this.set(type + "CheckedKeys", checkedKeys);
    }
  };

  _proto._isCheckAll = function _isCheckAll(model) {
    var checked = this.get(model + "Checked");

    var data = this._getEnabledData(model);

    return data.length && checked.length >= data.length;
  };

  _proto._toggleCheckAll = function _toggleCheckAll(model, e) {
    if (e.target.checked) {
      this._selectAll(model);
    } else {
      this.set(model + "CheckedKeys", []);
    }
  };

  _proto._selectAll = function _selectAll(model) {
    var _context4;

    var keyName = this.get('keyName');
    this.set(model + "CheckedKeys", _mapInstanceProperty(_context4 = this._getEnabledData(model)).call(_context4, function (item) {
      return item[keyName];
    }));
  };

  _proto._getEnabledData = function _getEnabledData(model) {
    var _context5;

    return _filterInstanceProperty(_context5 = this._getShowedData(model)).call(_context5, function (item) {
      return !item.disabled;
    });
  };

  _proto._getShowedData = function _getShowedData(model) {
    var data;

    if (model === 'left') {
      var _context6;

      var _this$get3 = this.get(),
          selectedKeys = _this$get3.selectedKeys,
          keyName = _this$get3.keyName;

      data = _filterInstanceProperty(_context6 = this.get('data')).call(_context6, function (item) {
        return !~_indexOfInstanceProperty(selectedKeys).call(selectedKeys, item[keyName]);
      });
    } else {
      data = this.get('value');
    }

    var keywords = this.get(model + "Keywords");

    if (this.get('filterable') && keywords) {
      var filter = this.get('filter');
      data = _filterInstanceProperty(data).call(data, function (item) {
        return filter(item, keywords);
      });
    }

    return data;
  };

  return Transfer;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "blocks", ['label', 'filter', 'header', 'list']), _defineProperty(_class2, "propTypes", {
  data: Array,
  value: Array,
  leftChecked: Array,
  rightChecked: Array,
  filterable: Boolean,
  filter: Function,
  label: Function,
  keyName: String,
  placeholder: String,
  leftTitle: [String, Intact.VNode],
  rightTitle: [String, Intact.VNode],
  enableAdd: Function,
  enableRemove: Function,
  selectedKeys: Array,
  leftCheckedKeys: Array,
  rightCheckedKeys: Array
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Transfer as default };
export { Transfer };