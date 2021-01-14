import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _Promise from "@babel/runtime-corejs3/core-js/promise";
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
import template from './index.vdt';
import { hasWindow } from '../utils';
import '../../styles/kpc.css';
import './index.css';
var App = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(App, _Intact);

  var _super = _createSuper(App);

  function App() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = App.prototype;

  _proto.defaults = function defaults() {
    return {
      view: undefined,
      container: undefined,
      loading: false,
      ssr: false
    };
  };

  _proto.showLoading = function showLoading() {
    this.set('loading', true, {
      async: true
    });
  };

  _proto.hideLoading = function hideLoading() {
    this.set('loading', false, {
      async: true
    });
  };

  _proto._init = function _init() {
    if (!this.get('ssr') && this.get('container')) {
      Intact.mount(this, this.get('container'));
    }
  };

  _proto._render = function _render(Page, data, string) {
    var _this = this;

    this._current = Page;
    return new _Promise(function (resolve, reject) {
      var page = new Page(data);
      page.$app = _this; // for debug

      if (hasWindow) {
        window.__page = page;
      }

      var done = function done() {
        if (_this._current === Page) {
          _this.set('view', page);
        }

        if (string) {
          resolve(_this.toString());
        } else {
          resolve();
        }
      };

      if (page.inited) {
        done();
      } else {
        page.on('$inited', done);
      }
    });
  };

  _proto.render = function render(Page, data) {
    return this._render(Page, data, true);
  };

  _proto.load = function load(Page, data, cleanup) {
    var _this2 = this;

    this.showLoading();
    return this._render(Page, data, false).then(function () {
      if (_this2.get('ssr') && !_this2.rendered) {
        Intact.hydrate(_this2, _this2.get('container'));
        cleanup && cleanup();
      }

      _this2.hideLoading();
    });
  };

  _createClass(App, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return App;
}(Intact), _defineProperty(_class2, "propTypes", {
  loading: Boolean
}), _defineProperty(_class2, "blocks", ['loading']), _temp), (_applyDecoratedDescriptor(_class.prototype, "template", [_dec], _Object$getOwnPropertyDescriptor(_class.prototype, "template"), _class.prototype)), _class));
export { App as default };
export { App };