import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _parseInt from "@babel/runtime-corejs3/core-js/parse-int";
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
var Pagination = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Pagination, _Intact);

  var _super = _createSuper(Pagination);

  function Pagination() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Pagination.prototype;

  _proto.defaults = function defaults() {
    return {
      total: 0,
      current: 1,
      limit: 10,
      counts: 7,
      showTotal: true,
      limits: [10, 20, 50],
      // value: '',
      showGoto: false,
      size: 'default',
      noBorder: false,
      simple: false,
      showLimits: true
    };
  };

  _proto._init = function _init() {
    var _this = this;

    // avoid setting incorrect value
    this.changePage(this.get('current'));
    this.on('$change:limit', function (c, v) {
      var oldCurrent = _this.get('current');

      if (oldCurrent !== 1) {
        // we should not silent it, but let it trigger change event
        // to sync the value to parent
        // set a flag to indicate that this set will be ignored to trigger
        // change event again in bellow $change:current callback
        // #341
        _this._ignore = true;

        _this.set('current', 1);

        _this._ignore = false;
      }

      _this.trigger('change', {
        limit: v,
        current: 1
      });
    });
    this.on('$change:current', function (c, v) {
      if (_this._ignore) return;

      _this.trigger('change', {
        limit: _this.get('limit'),
        current: v
      });
    });
  };

  _proto.changePage = function changePage(page) {
    var _this$get = this.get(),
        total = _this$get.total,
        limit = _this$get.limit;

    var totalPages = Math.ceil(total / limit);

    if (page > totalPages) {
      page = totalPages;
    }

    if (page < 1) {
      page = 1;
    }

    if (this.get('current') !== page) {
      this.set('current', page);
    } else {
      // force update to fix invalid input
      this.update();
    }
  };

  _proto.prev = function prev() {
    this.changePage(this.get('current') - 1);
  };

  _proto.next = function next() {
    this.changePage(this.get('current') + 1);
  };

  _proto.fastPrev = function fastPrev() {
    var page = this.get('current') - Math.ceil(this.get('counts') / 2);
    this.changePage(page);
  };

  _proto.fastNext = function fastNext() {
    var page = this.get('current') + Math.ceil(this.get('counts') / 2);
    this.changePage(page);
  };

  _proto._goto = function _goto(e) {
    // const regexp = /^[1-9]\d*$/;
    var value = _parseInt(e.target.value) || 1;
    this.changePage(value);
  };

  return Pagination;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "propTypes", {
  total: Number,
  current: Number,
  limit: Number,
  counts: [Number, String],
  limits: Array,
  showGoto: Boolean,
  size: ['large', 'default', 'small', 'mini'],
  noBorder: Boolean,
  simple: Boolean,
  showLimits: Boolean
}), _defineProperty(_class2, "events", {
  change: true
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Pagination as default };
export { Pagination };