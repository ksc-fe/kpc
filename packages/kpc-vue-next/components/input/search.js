import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js/instance/trim";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './search.vdt';
import '../../styles/kpc.css';
import './search.css';
import { _$ } from '../utils';
var Search = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Search, _Intact);

  var _super = _createSuper(Search);

  function Search() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Search.prototype;

  _proto.defaults = function defaults() {
    return {
      placeholder: _$('请输入关键字'),
      value: '',
      type: 'default',
      size: 'default',
      _open: false
    };
  };

  _proto._mount = function _mount() {
    document.addEventListener('click', this._onDocumentClick);
  };

  _proto._onDocumentClick = function _onDocumentClick(e) {
    var target = e.target;
    var elem = this.element;
    if (target === elem || elem.contains(target)) return;

    this._hide();
  };

  _proto._open = function _open() {
    this.set('_open', true);
    this.refs.input.select();
  };

  _proto._hide = function _hide() {
    this.set('_open', false);
  };

  _proto._onClickBtn = function _onClickBtn() {
    // if the box is open, then submit the form
    if (this.get('_open')) {
      this._submit();
    } else {
      this._open();
    }
  };

  _proto._onChangeValue = function _onChangeValue(c, v) {
    if (!this.get('_open')) return;
    this.set('value', v);
  };

  _proto._onSubmit = function _onSubmit(e) {
    e.preventDefault();

    this._submit();
  };

  _proto._submit = function _submit() {
    var _context;

    this.trigger('submit', _trimInstanceProperty(_context = this.get('value')).call(_context));
  };

  _proto._destroy = function _destroy() {
    document.removeEventListener('click', this._onDocumentClick);
  };

  return Search;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "propTypes", {
  placeholder: String,
  value: String,
  type: ['default', 'line'],
  size: ['large', 'default', 'small', 'mini']
}), _defineProperty(_class2, "events", {
  submit: true
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Search as default };