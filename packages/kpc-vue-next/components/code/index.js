import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";
import "core-js/modules/web.url";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
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
import '../../styles/kpc.css';
import './index.css';
import ResizeObserver from 'resize-observer-polyfill';
var Code = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Code, _Intact);

  var _super = _createSuper(Code);

  function Code() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Code.prototype;

  _proto.defaults = function defaults() {
    return {
      value: '',
      language: 'javascript',
      width: undefined,
      height: undefined,
      loading: true,
      theme: 'vs',
      readonly: false,
      options: {}
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.on('$receive:value', function (c, v) {
      if (v == null) {
        _this.set('value', '', {
          silent: true
        });
      }
    });
  };

  _proto._mount = function _mount() {
    var _this2 = this;

    import('monaco-editor').then(function (monaco) {
      if (_this2.destroyed) return;
      crossDomainWorker();
      /* istanbul ignore if */

      if (monaco.default) {
        monaco = monaco.default;
      }

      var _this2$get = _this2.get(),
          value = _this2$get.value,
          language = _this2$get.language,
          theme = _this2$get.theme,
          options = _this2$get.options,
          readonly = _this2$get.readonly;

      _this2.Editor = monaco.editor;
      _this2.editor = monaco.editor.create(_this2.element, _Object$assign({
        value: value,
        language: language,
        theme: theme,
        readOnly: readonly
      }, options));

      _this2.set('loading', false);

      _this2._watch();

      window.i = _this2;

      _this2.trigger('ready', _this2);
    });
  };

  _proto._watch = function _watch() {
    var _this3 = this;

    this.on('$change:language', function (c, v) {
      _this3.Editor.setModelLanguage(_this3.editor.getModel(), v);
    });
    this.on('$change:theme', function (c, v) {
      _this3.Editor.setTheme(v);
    });
    this.on('$change:options', function (c, v) {
      _this3.editor.updateOptions(v);
    });
    this.on('$receive:value', function () {
      _this3.editor.setValue(_this3.get('value'));
    });
    this.on('$change:readonly', function (c, v) {
      _this3.editor.updateOptions({
        readOnly: v
      });
    });
    this.editor.onDidChangeModelContent(function (e) {
      _this3.set('value', _this3.editor.getValue());
    });
    var ro = this.ro = new ResizeObserver(function () {
      _this3.editor.layout();
    });
    ro.observe(this.element);
  };

  _proto._destroy = function _destroy() {
    if (this.editor) {
      this.editor.dispose();
      this.ro.disconnect();
    }
  };

  return Code;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "events", {
  ready: true
}), _defineProperty(_class2, "propTypes", {
  value: String,
  language: String,
  width: String,
  height: String,
  loading: Boolean,
  theme: ['vs', 'vs-dark', 'hc-black'],
  options: Object,
  readonly: Boolean
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Code as default };

function crossDomainWorker() {
  if (!window.MonacoEnvironment) return;
  var oldGetWorkerUrl = window.MonacoEnvironment.getWorkerUrl;
  if (oldGetWorkerUrl.$) return;
  oldGetWorkerUrl.$ = true;

  window.MonacoEnvironment.getWorkerUrl = function (moduleId, label) {
    var workerUrl = oldGetWorkerUrl(moduleId, label);

    var _isSameOrigin = isSameOrigin(workerUrl),
        isSame = _isSameOrigin.isSame,
        url = _isSameOrigin.url;
    /* istanbul ignore else */


    if (isSame) return workerUrl;else {
      var blob;

      try {
        blob = new Blob(["importScripts('" + url + "');"], {
          type: 'application/javascript'
        });
      } catch (e) {
        var blobBuilder = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder)();
        blobBuilder.append("importScripts('" + url + "');");
        blob = blobBuilder.getBlob('application/javascript');
      }

      var URL = window.URL || window.webkitURL;
      var blobUrl = URL.createObjectURL(blob);
      return blobUrl;
    }
  };
}

function isSameOrigin(url) {
  var loc = window.location;
  var a = document.createElement('a');
  a.href = url;
  return {
    isSame: a.hostname === loc.hostname && a.port === loc.port && a.protocol === loc.protocol,
    // maybe the protocol is relative
    url: a.href
  };
}

export { Code };