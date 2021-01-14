import "core-js/modules/es.array.join";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js/instance/filter";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './column.vdt';

var TableColumn = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(TableColumn, _Intact);

  var _super = _createSuper(TableColumn);

  function TableColumn() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = TableColumn.prototype;

  _proto.defaults = function defaults() {
    return {
      title: undefined,
      template: function template(data, index) {},
      key: '',
      sortable: false,
      width: undefined,
      group: undefined,
      multiple: false,
      value: [],
      minWidth: undefined,
      ignore: false,
      fixed: undefined,
      align: undefined,
      rows: undefined,
      cols: undefined,
      invisible: false,
      exportTitle: undefined,
      // for omiting it by getRestProps
      blockFn: undefined,
      // passed by parent
      $parent: undefined,
      _show: false
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.on('$receive:width', function (c, v) {
      _this.width = v;
    });
  };

  _proto.onClick = function onClick(e) {
    this.trigger('click', e);
  };

  _proto.onDragStart = function onDragStart(e) {
    this.trigger('dragStart', this.vNode, e);
  };

  _proto._isChecked = function _isChecked(v) {
    var _this$get = this.get(),
        value = _this$get.value,
        multiple = _this$get.multiple;

    if (multiple) {
      return !!(value && ~_indexOfInstanceProperty(value).call(value, v));
    }

    return value === v;
  };

  _proto._onSelect = function _onSelect(v, c, e) {
    e.preventDefault();

    var _this$get2 = this.get(),
        value = _this$get2.value,
        multiple = _this$get2.multiple;

    if (multiple) {
      var tmp = value ? _sliceInstanceProperty(value).call(value, 0) : [];

      var index = _indexOfInstanceProperty(tmp).call(tmp, v);

      if (~index) {
        _spliceInstanceProperty(tmp).call(tmp, index, 1);
      } else {
        tmp.push(v);
      }

      this.set('value', tmp);
    } else {
      this.set('value', v);
    }
  };

  _proto._onChangeShow = function _onChangeShow(c, v) {
    this.set('_show', v);
  };

  _proto._getGroupText = function _getGroupText() {
    var _this$get3 = this.get(),
        value = _this$get3.value,
        multiple = _this$get3.multiple,
        group = _this$get3.group;

    if (value == null) return;

    if (!multiple) {
      value = [value];
    }

    var ret;

    if (group) {
      var _context;

      ret = _mapInstanceProperty(_context = _filterInstanceProperty(group).call(group, function (item) {
        return ~_indexOfInstanceProperty(value).call(value, item.value);
      })).call(_context, function (item) {
        return item.label;
      }).join(', ');

      if (ret) {
        return "(" + ret + ")";
      }
    }
  };

  _proto._stopPropagation = function _stopPropagation(e) {
    e.stopPropagation();
  };

  _createClass(TableColumn, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return TableColumn;
}(Intact);

_defineProperty(TableColumn, "blocks", ['title', 'template', 'default']);

_defineProperty(TableColumn, "propTypes", {
  title: [String, Intact.VNode, Array, Object
  /* for vue vnode*/
  ],
  template: Function,
  key: {
    type: String,
    required: true
  },
  sortable: Boolean,
  width: [Number, String],
  group: Array,
  multiple: Boolean,
  minWidth: [Number, String],
  ignore: Boolean,
  fixed: ['left', 'right'],
  align: ['left', 'center', 'right'],
  rows: Number,
  cols: Number,
  invisible: Boolean,
  exportTitle: String
});

_defineProperty(TableColumn, "events", {
  click: true,
  dragStart: true
});

export { TableColumn as default };