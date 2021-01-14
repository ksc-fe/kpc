import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";
import _Object$keys from "@babel/runtime-corejs3/core-js/object/keys";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './row.vdt';
var PROPS = ['value', 'index', 'rowKey', 'checkType', 'onlyRight', 'onlyLeft', 'disabled', 'merge', 'level', 'indent', 'children', 'className', 'checked', 'draggable', 'dragKey', // to make scheme compare at last
'scheme'];
var TableRow = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(TableRow, _Intact);

  var _super = _createSuper(TableRow);

  function TableRow() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = TableRow.prototype;

  _proto._onClick = function _onClick(e) {
    var _this$get = this.get(),
        onClick = _this$get.onClick,
        value = _this$get.value,
        index = _this$get.index,
        rowKey = _this$get.rowKey,
        click = _this$get['ev-click'];

    onClick(value, index, rowKey, e);
    click && click(e);
  };

  _proto._onMouseEnter = function _onMouseEnter(e) {
    var _this$get2 = this.get(),
        onRowEnter = _this$get2.onRowEnter,
        index = _this$get2.index,
        mouseEnter = _this$get2['ev-mouseenter'];

    onRowEnter(index, e); // for Tooltip

    mouseEnter && mouseEnter(e);
  };

  _proto._onMouseLeave = function _onMouseLeave(e) {
    var _this$get3 = this.get(),
        onRowLeave = _this$get3.onRowLeave,
        mouseLeave = _this$get3['ev-mouseleave'];

    onRowLeave(e);
    mouseLeave && mouseLeave(e);
  };

  _proto._onDragStart = function _onDragStart(e) {
    var _this$get4 = this.get(),
        onRowDragStart = _this$get4.onRowDragStart;

    onRowDragStart(e, this);
  };

  _proto._onDragEnd = function _onDragEnd(e) {
    var _this$get5 = this.get(),
        onRowDragEnd = _this$get5.onRowDragEnd;

    onRowDragEnd(e, this);
  };

  _proto._onDragOver = function _onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();

    var _this$get6 = this.get(),
        onRowDragOver = _this$get6.onRowDragOver;

    onRowDragOver(e, this);
  };

  _proto._onToggleSpreadRow = function _onToggleSpreadRow(e) {
    var _this$get7 = this.get(),
        onToggleSpreadRow = _this$get7.onToggleSpreadRow,
        rowKey = _this$get7.rowKey;

    onToggleSpreadRow(rowKey, e);
  };

  _proto._onChangeChecked = function _onChangeChecked(c, v) {
    var _this$get8 = this.get(),
        onChangeChecked = _this$get8.onChangeChecked,
        rowKey = _this$get8.rowKey;

    onChangeChecked(rowKey, v);
  };

  _proto._destroy = function _destroy() {
    var _this$get9 = this.get(),
        onDestroy = _this$get9.onDestroy,
        rowKey = _this$get9.rowKey;

    onDestroy(rowKey);
  };

  _proto.update = function update(lastVNode, nextVNode, flag) {
    if (lastVNode && nextVNode) {
      var lastProps = lastVNode.props;
      var nextProps = nextVNode.props;
      var isSame = true;

      for (var i = 0; i < PROPS.length; i++) {
        var key = PROPS[i];

        if (key === 'scheme' ? !isSameScheme(lastProps.scheme, nextProps.scheme) : lastProps[key] !== nextProps[key]) {
          isSame = false;
          break;
        }
      }

      if (isSame) {
        // add last rowInGrid in grid
        var merge = nextProps.merge,
            grid = nextProps.grid;

        if (merge) {
          grid.push(this.rowInGrid);
        } // update events for Tooltip


        this.set(nextProps, {
          silent: true
        }); // this.set({
        // 'ev-mouseenter': nextProps['ev-mouseenter'],
        // 'ev-mouseleave': nextProps['ev-mouseleave'],
        // 'ev-click': nextProps['ev-click'],
        // }, {silent: true})

        return this.element;
      }
    }

    return _Intact.prototype.update.call(this, lastVNode, nextVNode, flag);
  };

  return TableRow;
}(Intact), _defineProperty(_class2, "template", template), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { TableRow as default };
var compareProps = ['template', 'blockFn', 'ignore', 'align', 'className', 'fixed'];

function isSameScheme(schemeA, schemeB) {
  if (schemeA === schemeB) return true;

  if (schemeA && schemeB) {
    var keysA = _Object$keys(schemeA);

    var keysB = _Object$keys(schemeB);

    var length = keysA.length;
    if (length !== keysB.length) return false;

    while (length--) {
      var key = keysA[length];
      var valueB = schemeB[key];
      if (!valueB) return false;
      var valueA = schemeA[key];

      for (var i = 0; i < compareProps.length; i++) {
        var prop = compareProps[i];

        if (valueA[prop] !== valueB[prop]) {
          return false;
        }
      }
    }

    return true;
  }

  return false;
}