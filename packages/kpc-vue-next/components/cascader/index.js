import "core-js/modules/es.array.join";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js/instance/filter";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js/instance/trim";
import _valuesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/values";
import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime-corejs3/helpers/asyncToGenerator";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp, _context5, _context6;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import Select from '../select';
import template from './index.vdt';
import '../../styles/kpc.css';
import './index.css';
var Cascader = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Select) {
  _inheritsLoose(Cascader, _Select);

  var _super = _createSuper(Cascader);

  function Cascader() {
    return _Select.apply(this, arguments) || this;
  }

  var _proto = Cascader.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _Select.prototype.defaults.call(this), {
      data: undefined,
      trigger: 'click',
      changeOnSelect: false,
      format: function format(values) {
        return _mapInstanceProperty(values).call(values, function (value) {
          return value.label;
        }).join(' / ');
      },
      filter: function filter(keywords, props) {
        var _context;

        return _indexOfInstanceProperty(_context = props.label).call(_context, keywords) > -1;
      },
      loadData: function loadData(item) {},
      _value: []
    });
  };

  _proto._init = function _init() {
    var _this = this;

    this.on('$receive:value', function (c, v) {
      _this.set('_value', v);
    });
  };

  _proto._onClick = function _onClick(item, index) {
    var values = this.get('_value');

    if (!_Array$isArray(values)) {
      values = [];
    } else {
      values = _sliceInstanceProperty(values).call(values, 0, index);
    }

    values[index] = item.value;
    this.set('_value', values, {
      async: true
    });

    if (this.get('changeOnSelect')) {
      this.set('value', values);
    }
  };

  _proto._onSelect = function _onSelect() {
    var _context2;

    this.set('value', _sliceInstanceProperty(_context2 = this.get('_value')).call(_context2, 0));
  }
  /**
   * on sub menu showed, load data if children is empty
   */
  ;

  _proto._onSubMenuShow =
  /*#__PURE__*/
  function () {
    var _onSubMenuShow2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(item) {
      return _regeneratorRuntime.wrap(function _callee$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(item.children && !item.children.length && !item.loaded)) {
                _context3.next = 5;
                break;
              }

              _context3.next = 3;
              return this.get('loadData').call(this, item);

            case 3:
              item.loaded = true;
              this.update();

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee, this);
    }));

    function _onSubMenuShow(_x) {
      return _onSubMenuShow2.apply(this, arguments);
    }

    return _onSubMenuShow;
  }();

  _proto._clearValue = function _clearValue() {};

  _proto.handleProps = function handleProps(props, labelObj, level) {
    var _this$get = this.get(),
        _value = _this$get._value,
        value = _this$get.value;

    var active = false;
    var selected = false;

    if (_Array$isArray(_value)) {
      if (_value[level] === props.value) {
        active = true;
      }
    }

    if (_Array$isArray(value)) {
      if (value[level] === props.value) {
        _valuesInstanceProperty(labelObj).push(props);

        selected = true;
      }
    }

    return {
      active: active,
      selected: selected
    };
  };

  _proto._onSearch = function _onSearch(e) {
    var _context4;

    var keywords = _trimInstanceProperty(_context4 = e.target.value).call(_context4);

    if (keywords) {
      _Select.prototype._onSearch.call(this, e);
    } else {
      this.set('keywords', keywords);
      this.refs.cascader.show();
    }
  };

  _proto._filter = function _filter() {
    var _this2 = this;

    var _this$get2 = this.get(),
        data = _this$get2.data,
        keywords = _this$get2.keywords,
        filter = _filterInstanceProperty(_this$get2);

    var ret = [];

    var walk = function walk(data, prefix, valid, disabled) {
      if (prefix === void 0) {
        prefix = [];
      }

      if (valid === void 0) {
        valid = false;
      }

      if (disabled === void 0) {
        disabled = false;
      }

      _forEachInstanceProperty(data).call(data, function (item) {
        var _valid = valid || filter.call(_this2, keywords, item);

        var _disabled = disabled || item.disabled;

        var _prefix = _sliceInstanceProperty(prefix).call(prefix, 0);

        _prefix.push(item);

        if (item.children) {
          walk(item.children, _prefix, _valid, _disabled);
        } else if (_valid) {
          _prefix.disabled = _disabled;
          ret.push(_prefix);
        }
      });
    };

    walk(data);
    return ret;
  };

  _proto._selectByFilter = function _selectByFilter(value) {
    var _value = _mapInstanceProperty(value).call(value, function (item) {
      return item.value;
    });

    this.set({
      value: _value,
      _value: _value
    }, {
      async: true
    });

    this._resetSearch();
  };

  return Cascader;
}(Select), _defineProperty(_class2, "template", template), _defineProperty(_class2, "blocks", _filterInstanceProperty(_context5 = _concatInstanceProperty(_context6 = []).call(_context6, Select.blocks, ['format'])).call(_context5, Boolean)), _defineProperty(_class2, "propTypes", _Object$assign({}, Select.propTypes, {
  data: Array,
  trigger: String,
  changeOnSelect: Boolean,
  format: Function,
  filter: Function,
  loadData: Function
})), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Cascader as default };
export { Cascader };