import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import BaseTable from './base';
import { debounce } from '../utils';

var DraggableTable = /*#__PURE__*/function (_BaseTable) {
  _inheritsLoose(DraggableTable, _BaseTable);

  var _super = _createSuper(DraggableTable);

  function DraggableTable() {
    return _BaseTable.apply(this, arguments) || this;
  }

  var _proto = DraggableTable.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _BaseTable.prototype.defaults.call(this), {
      _dragKey: undefined
    });
  };

  _proto._onRowDragStart = function _onRowDragStart(e, row) {
    var _context;

    this._draggingRow = row;
    var key = row.get('rowKey');
    this.set('_dragKey', key);

    _forEachInstanceProperty(_context = this.scroll.querySelectorAll('tr')).call(_context, function (tr) {
      tr._height = tr.offsetHeight;
    });

    this._dragIndex = row.get('index');
    this.trigger('dragstart', {
      key: key,
      from: this._dragIndex
    });
  };

  _proto._onRowDragOver = function _onRowDragOver(e, row) {
    if (row === this._draggingRow) return;
    var _event = event,
        clientY = _event.clientY;
    if (this._clientY === clientY) return;
    this._clientY = clientY;

    this._handleDragOver();
  };

  _proto._handleDragOver = function _handleDragOver() {
    var _context2;

    var oldIndex = this._draggingRow.get('index');

    var index = this._findInsertIndex();

    if (index === oldIndex) return;

    var data = _sliceInstanceProperty(_context2 = this.get('data')).call(_context2, 0);

    var item = _spliceInstanceProperty(data).call(data, oldIndex, 1)[0];

    _spliceInstanceProperty(data).call(data, index, 0, item);

    this._dropIndex = index;
    this.set('data', data);
  };

  _proto._findInsertIndex = function _findInsertIndex() {
    var clientY = this._clientY;
    var tbody = this.scroll;
    var top = tbody.getBoundingClientRect().top;
    var trs = tbody.querySelectorAll('tr');
    var offsetY = tbody.scrollTop + clientY - top;
    var sum = 0;
    var i = 0;

    for (i = 0; i < trs.length; i++) {
      sum += trs[i]._height;

      if (offsetY < sum) {
        return i;
      }
    }

    return i - 1;
  };

  _proto._onRowDragEnd = function _onRowDragEnd(e, row) {
    e.preventDefault();
    this.set('_dragKey', undefined);
    this.trigger('dragend', {
      key: row.get('rowKey'),
      from: this._dragIndex,
      to: this._dropIndex
    });
  };

  return DraggableTable;
}(BaseTable);

_defineProperty(DraggableTable, "events", _Object$assign({}, BaseTable.events, {
  dragstart: true,
  dragend: true
}));

export { DraggableTable as default };