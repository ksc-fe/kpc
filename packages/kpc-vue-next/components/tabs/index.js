import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime-corejs3/helpers/asyncToGenerator";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import Tab from './tab';
import template from './index.vdt';
import '../../styles/kpc.css';
import './index.css';
import ResizeObserver from 'resize-observer-polyfill';
import { nextFrame, findRouter } from '../utils';
var Tabs = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Tabs, _Intact);

  var _super = _createSuper(Tabs);

  function Tabs() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Tabs.prototype;

  _proto.defaults = function defaults() {
    return {
      data: undefined,
      value: undefined,
      vertical: false,
      size: 'default',
      type: 'default',
      closable: false,
      beforeChange: undefined,
      _activeBarStyle: undefined,
      _scroll: false,
      _left: 0,
      _prev: false,
      _next: false
    };
  };

  _proto._changeTab = /*#__PURE__*/function () {
    var _changeTab2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(item) {
      var _this$get, beforeChange, ret;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$get = this.get(), beforeChange = _this$get.beforeChange;

              if (!beforeChange) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return beforeChange(item.value);

            case 4:
              ret = _context.sent;

              if (ret) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return");

            case 7:
              // if exits 'to', we don't change the value,
              // while let the page to change it by pass value prop
              if (!item.to) {
                this.set('value', item.value);
              } else if (this.$router) {
                this.$router.push(item.to);
              } else {
                window.location.href = item.to;
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function _changeTab(_x) {
      return _changeTab2.apply(this, arguments);
    }

    return _changeTab;
  }();

  _proto._mount = function _mount() {
    var _this = this;

    this._setActiveBarStyle();

    this._refreshScroll();

    this.on('$changed:value', function () {
      // we scroll active tab to view next frame
      // because the _scroll property updates after it 
      nextFrame(function () {
        if (_this.destroyed) return;

        _this._scrollActiveToView();
      });
    }); // resize

    var ro = this.ro = new ResizeObserver(function () {
      _this._refreshScroll();
    });
    ro.observe(this.element);
    this.$router = findRouter(this);
  };

  _proto._refreshScroll = function _refreshScroll() {
    var _this$get2 = this.get(),
        vertical = _this$get2.vertical;

    if (vertical) return;
    var _this$refs = this.refs,
        scroll = _this$refs.scroll,
        wrapper = _this$refs.wrapper;
    var scrollWidth = scroll.offsetWidth;
    var wrapperWidth = wrapper.offsetWidth;
    this.set('_scroll', scrollWidth < wrapperWidth);

    this._setTransition();
  };

  _proto._setTransition = function _setTransition(_left) {
    if (_left === void 0) {
      _left = this.get('_left');
    }

    var _this$get3 = this.get(),
        vertical = _this$get3.vertical;

    if (vertical) return;
    var _this$refs2 = this.refs,
        scroll = _this$refs2.scroll,
        wrapper = _this$refs2.wrapper;
    var scrollWidth = scroll.offsetWidth;
    var wrapperWidth = wrapper.offsetWidth;
    var _prev = true;
    var _next = true;

    if (_left >= 0) {
      _left = 0;
      _prev = false;
    } else if (_left <= scrollWidth - wrapperWidth) {
      _left = scrollWidth - wrapperWidth;
      _next = false;
    }

    this.set({
      _left: _left,
      _prev: _prev,
      _next: _next
    });
  };

  _proto._update = function _update(lastVNode, nextVNode) {
    this._setActiveBarStyle();

    this._refreshScroll();
  };

  _proto._setActiveBarStyle = function _setActiveBarStyle() {
    var vertical = this.get('vertical');
    var activeTab = this.element.querySelector('.k-tab.k-active');

    if (activeTab) {
      if (!vertical) {
        var width = activeTab.offsetWidth;
        var left = activeTab.offsetLeft;
        this.set('_activeBarStyle', {
          left: left + 'px',
          width: width + 'px'
        });
      } else {
        var height = activeTab.offsetHeight;
        var top = activeTab.offsetTop;
        this.set('_activeBarStyle', {
          top: top + 'px',
          height: height + 'px'
        });
      }
    }
  };

  _proto._scrollActiveToView = function _scrollActiveToView() {
    var _this$get4 = this.get(),
        vertical = _this$get4.vertical;

    if (vertical) return;
    var activeTab = this.element.querySelector('.k-tab.k-active');

    if (activeTab) {
      var _this$get5 = this.get(),
          _left = _this$get5._left;

      var _this$refs3 = this.refs,
          scroll = _this$refs3.scroll,
          wrapper = _this$refs3.wrapper; // don't use getBoundingClientRect, it has transform and will return digital number

      var activeRect = {
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth
      };
      var scrollRect = {
        width: scroll.offsetWidth
      };
      var wrapperRect = {
        left: wrapper.offsetLeft,
        width: wrapper.offsetWidth
      };
      var x = activeRect.left - wrapperRect.left;

      if (_left + x <= 0) {
        _left = -x;
      } else if (x + activeRect.width + _left > scrollRect.width) {
        _left = -x - activeRect.width + scrollRect.width;
      }

      this.set({
        _left: _left
      });
    } else {
      this.set('_left', 0);
    }
  };

  _proto._remove = function _remove(tab) {
    this.trigger('remove', tab.get('value'));
  };

  _proto._prev = function _prev() {
    var _this$get6 = this.get(),
        _left = _this$get6._left;

    var scrollWidth = this.refs.scroll.offsetWidth;

    this._setTransition(_left + scrollWidth);
  };

  _proto._next = function _next() {
    var _this$get7 = this.get(),
        _left = _this$get7._left;

    var scrollWidth = this.refs.scroll.offsetWidth;

    this._setTransition(_left - scrollWidth);
  };

  _proto._destroy = function _destroy() {
    this.ro.disconnect();
  };

  _createClass(Tabs, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return Tabs;
}(Intact), _defineProperty(_class2, "propTypes", {
  data: Array,
  vertical: Boolean,
  size: ['large', 'default', 'small', 'mini'],
  type: ['default', 'card', 'border-card', 'no-border-card'],
  closable: Boolean,
  beforeChange: Function
}), _defineProperty(_class2, "events", {
  remove: true
}), _temp), (_applyDecoratedDescriptor(_class.prototype, "template", [_dec], _Object$getOwnPropertyDescriptor(_class.prototype, "template"), _class.prototype)), _class));
export { Tabs as default };
export { Tabs, Tab };