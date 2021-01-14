import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _Promise from "@babel/runtime-corejs3/core-js/promise";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact, { normalize } from 'intact-vue';
import template from './alert.vdt';
export default function addStaticMethods(Dialog) {
  var _dec, _class, _init, _class2, _temp, _context;

  var AlertDialog = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Dialog) {
    _inheritsLoose(AlertDialog, _Dialog);

    var _super = _createSuper(AlertDialog);

    function AlertDialog() {
      return _Dialog.apply(this, arguments) || this;
    }

    var _proto = AlertDialog.prototype;

    _proto.defaults = function defaults() {
      return _Object$assign({}, _Dialog.prototype.defaults.call(this), {
        title: undefined,
        content: undefined,
        type: 'success',
        size: 'mini',
        hideIcon: false,
        hideFooter: false,
        showClose: false,
        _title: undefined
      });
    };

    return AlertDialog;
  }(Dialog), _defineProperty(_class2, "template", template), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _class)), _class));

  function show(options) {
    if (options === void 0) {
      options = {};
    }

    return new _Promise(function (resolve, reject) {
      var dialog = new AlertDialog(options);
      dialog.show();
      dialog.on('ok', function () {
        resolve();
      });
      dialog.on('cancel', function () {
        reject();
      }); // if press esc, treat it as cancel too

      dialog.on('terminate', function () {
        reject();
      });
    });
  }

  _forEachInstanceProperty(_context = ['success', 'warning', 'error', 'confirm']).call(_context, function (type) {
    Dialog[type] = function (options) {
      if (options === void 0) {
        options = {};
      }

      var closable = type === 'confirm';
      options = _Object$assign({
        closable: closable,
        escClosable: closable
      }, options, {
        type: type
      });

      if (options.title) {
        options._title = options.title;
        delete options.title;
      }

      return show(options);
    };
  });
}