import "core-js/modules/es.function.name";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.replace";
import "core-js/modules/es.string.search";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
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
var externalRegExp = /^(https?:)?\/\//;
var Link = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Link, _Intact);

  var _super = _createSuper(Link);

  function Link() {
    return _Intact.apply(this, arguments) || this;
  }

  Link.to = function to(_ref) {
    var href = _ref.href,
        name = _ref.name,
        isReplace = _ref.isReplace;
    var history = Link.history;
    var url;

    if (href != null) {
      url = href;
    } else if (name != null) {
      if (_Array$isArray(name)) {
        url = Link.url.apply(Link.url, name);
      } else {
        url = Link.url(name);
      }
    }

    if (url) {
      if (externalRegExp.test(url)) {
        if (isReplace) {
          location.href = url;
        } else {
          window.open(url);
        }
      } else {
        // if the href is equal to the current href, then do nothing
        var _history$location = history.location,
            pathname = _history$location.pathname,
            search = _history$location.search;
        if (pathname + search === url) return;

        if (isReplace) {
          history.replace(url);
        } else {
          history.push(url);
        }
      }
    }
  };

  var _proto = Link.prototype;

  _proto.defaults = function defaults() {
    return {
      href: undefined,
      name: undefined,
      isReplace: false
    };
  };

  _proto.to = function to(e) {
    e.preventDefault();
    this.trigger('click', e);
    Link.to(this.get());
  };

  _createClass(Link, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return Link;
}(Intact), _defineProperty(_class2, "history", undefined), _defineProperty(_class2, "propTypes", {
  href: String,
  name: [String, Array],
  isReplace: Boolean
}), _defineProperty(_class2, "events", {
  click: true
}), _temp), (_applyDecoratedDescriptor(_class.prototype, "template", [_dec], _Object$getOwnPropertyDescriptor(_class.prototype, "template"), _class.prototype)), _class));
export { Link as default };
export { Link };