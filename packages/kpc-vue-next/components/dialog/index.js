import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _Promise from "@babel/runtime-corejs3/core-js/promise";
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
import { position, scrollbarWidth } from '../moveWrapper/position';
import { _$, config } from '../utils';
import addStaticMethods from './methods';
import initMouseOutsidable from '../dropdown/mouseOutsidable'; // only close the top dialog when press ESC

var dialogs = [];

var escClose = function escClose(e) {
  dialogs[dialogs.length - 1]._escClose(e);
};

var Dialog = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Dialog, _Intact);

  var _super = _createSuper(Dialog);

  function Dialog() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Dialog.prototype;

  _proto.defaults = function defaults() {
    return {
      title: _$('提示'),
      value: false,
      size: 'default',
      // large | default | small | mini
      loading: false,
      disabledOk: false,
      okText: _$('确定'),
      cancelText: _$('取消'),
      ok: undefined,
      cancel: undefined,
      container: function container() {
        return document.body;
      },
      hideClose: false,
      overlay: true,
      closable: true,
      terminate: undefined,
      escClosable: true,
      width: undefined,
      mode: 'destroy',
      _dragging: false
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.on('$changed:value', function (c, isShow) {
      if (isShow) {
        _this._onOpen();
      } else {
        _this._onClose();
      }
    });
    initMouseOutsidable(this);
  };

  _proto._create = function _create() {
    // use as component
    if (this.vNode) {
      this._useAsComponent = true;
    }
  };

  _proto._mount = function _mount(lastVNode, nextVNode) {
    // for debug
    window.__dialog = this;
  };

  _proto._onAppended = function _onAppended() {
    // if appear, it has animate-appear className and this will effect the dialog
    // so we can not call _center after it
    // in this case we center dialog as soon as it has been appended to container
    if (this.get('value')) {
      this.mounted = true;

      this._onOpen();
    }
  };

  _proto._shouldFixBody = function _shouldFixBody() {
    if (document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)) {
      return scrollbarWidth();
    }
  };

  _proto._onOpen = function _onOpen() {
    if (this.get('overlay')) {
      this.refs.wrapper.style.display = 'block';
      var body = document.body;

      if (!body.__dialogAmount) {
        var bodyStyle = body.style;
        this._originBodyStyle = body.getAttribute('style');
        bodyStyle.overflow = 'hidden';

        var scrollBarWidth = this._scrollBarWidth = this._shouldFixBody();

        if (scrollBarWidth) {
          bodyStyle.paddingRight = scrollBarWidth + "px";

          if (config.onDialogOpen) {
            config.onDialogOpen(scrollBarWidth);
          }
        }

        body.__dialogAmount = 1;
      } else {
        body.__dialogAmount++;
      }
    }

    this.trigger('open');

    this._center();

    if (!dialogs.length) {
      document.addEventListener('keydown', escClose);
    }

    dialogs.push(this);
  };

  _proto._onClose = function _onClose() {
    this.trigger('close');
    dialogs.pop();

    if (!dialogs.length) {
      document.removeEventListener('keydown', escClose);
    }
  };

  _proto.showLoading = function showLoading() {
    this.set('loading', true);
  };

  _proto.hideLoading = function hideLoading() {
    this.set('loading', false);
  };

  _proto.disableOk = function disableOk() {
    this.set('disabledOk', true);
  };

  _proto.enableOk = function enableOk() {
    this.set('disabledOk', false);
  };

  _proto.close = function close() {
    this.set('value', false, {
      async: false
    });
  };

  _proto.cancel = function cancel() {
    var callback = this.get('cancel');

    if (typeof callback === 'function') {
      callback.call(this, this);
    } else {
      this.trigger('cancel', this);
      this.close();
    }
  };

  _proto.ok = function ok() {
    var callback = this.get('ok');

    if (typeof callback === 'function') {
      callback.call(this, this);
    } else {
      this.trigger('ok', this);
      this.close();
    }
  };

  _proto.show = function show() {
    var _this2 = this;

    return new _Promise(function (resolve) {
      if (_this2.get('value')) return; // use as component

      if (_this2._useAsComponent) {
        return _this2.set('value', true);
      } // use as instance


      if (_this2.rendered) {
        _this2.set('value', true);
      } else {
        var show = function show() {
          _this2.set('value', true);

          _this2.init();

          _this2.mount();

          resolve();
        };

        if (_this2.inited) {
          show();
        } else {
          _this2.on('$inited', show);
        }
      }
    });
  };

  _proto._escClose = function _escClose(e) {
    // Esc
    if (this.get('escClosable') && e.keyCode === 27) {
      this._terminate();
    }
  };

  _proto._leaveEnd = function _leaveEnd() {
    // use as instance or use as component but it has been destroyed
    // (maybe this case casued by parent has destroyed)
    // then remove the element.
    //
    // maybe the animation leaveEnd immediately when destroy it before entering
    // so use `this._destroyed` instead of `this.destroyed`
    //
    // In Vue, if the Dialog has controlled by v-if and v-model, when we close
    // the dialog, we set `value` to false and it will update self, and it also
    // changes the owner component's value, but Vue updates view next tick.
    // In this case, the leaveEnd triggers after the element has been removed
    // by Vue, so if we destroy children, it can't remove element again. #476
    if (!this._useAsComponent || this._useAsComponent && this._destroyed) {
      this.vdt.vNode.children._$destroy();
    }

    if (this.get('overlay')) {
      if (this._useAsComponent) {
        var wrapper = this.refs.wrapper;

        if (wrapper) {
          wrapper.style.display = 'none';
        }
      }

      var body = document.body;
      body.__dialogAmount--;

      if (!body.__dialogAmount) {
        body.setAttribute('style', this._originBodyStyle || '');
      }

      if (config.onDialogClose && this._scrollBarWidth) {
        config.onDialogClose(this._scrollBarWidth);
      }
    }
  };

  _proto._center = function _center() {
    if (!this.mounted || !this.get('value')) return; // move to center

    position(this.dialog, {
      // ensure title visible always
      using: function using(feedback, position) {
        var height = feedback.element.height;
        var scrollTop = window.pageYOffset;
        var outerHeight = window.document.documentElement.clientHeight;

        if (height > outerHeight) {
          position.top = scrollTop;
        }
      },
      // let dialog padding top half of padding bottom
      my: 'center center+16%',
      at: 'center center-16%'
    });
  };

  _proto._dragStart = function _dragStart(e) {
    // left key
    if (e.which !== 1 || !this.get('value')) return;
    this.set('_dragging', true);
    var dialog = this.dialog;
    this._x = dialog.offsetLeft - e.clientX;
    this._y = dialog.offsetTop - e.clientY;
    this._width = dialog.offsetWidth;
    this._height = dialog.offsetHeight;
    var body = document.body;
    var html = document.documentElement;

    if (!this.get('overlay')) {
      this._areaWidth = Math.max(body.scrollWidth, html.scrollWidth);
      this._areaHeight = Math.max(body.scrollHeight, html.scrollHeight);
    } else {
      this._areaWidth = body.offsetWidth;
      this._areaHeight = body.offsetHeight;
    }

    document.addEventListener('mousemove', this._move);
    document.addEventListener('mouseup', this._dragEnd);
  };

  _proto._move = function _move(e) {
    if (this.get('_dragging')) {
      var style = this.dialog.style;
      var _areaWidth = this._areaWidth,
          _areaHeight = this._areaHeight;

      if (this.get('overlay')) {
        // detect the wrapper has scrollbar or not
        var wrapper = this.refs.wrapper;

        if (wrapper.scrollHeight > wrapper.offsetHeight) {
          var scrollBarWidth = scrollbarWidth();
          _areaWidth -= scrollBarWidth;
        }
      }

      var left = Math.min(Math.max(this._x + e.clientX, 0), Math.max(_areaWidth - this._width, 0));
      var top = Math.min(Math.max(this._y + e.clientY, 0), Math.max(_areaHeight - this._height, 0));
      style.left = left + "px";
      style.top = top + "px";
    }
  };

  _proto._dragEnd = function _dragEnd() {
    if (this.get('_dragging')) {
      this.set('_dragging', false);
      document.removeEventListener('mousemove', this._move);
      document.removeEventListener('mouseup', this._dragEnd);
    }
  };

  _proto._onClickOverlay = function _onClickOverlay() {
    if (this.get('closable') && !this._mousedown) {
      this._terminate();
    }
  };

  _proto._onClickWrapper = function _onClickWrapper(e) {
    if (e.target === this.refs.wrapper) {
      this._onClickOverlay(e);
    }
  }
  /**
   * @brief
   * only be called by self when user clicks close button,
   * presses ESC or clicks overlay
   */
  ;

  _proto._terminate = function _terminate() {
    var terminate = this.get('terminate');

    if (terminate) {
      terminate.call(this, this);
    } else {
      this.trigger('terminate');
      this.close();
    }
  };

  _proto._destroy = function _destroy() {
    if (this.get('value')) {
      // only destroy on it indeed need destroy, #476
      this._destroyed = true;
      this.close();
    } else {
      var _this$vdt$vNode$child;

      (_this$vdt$vNode$child = this.vdt.vNode.children)._$destroy.apply(_this$vdt$vNode$child, arguments);
    }

    this._dragEnd();
  };

  return Dialog;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "blocks", ['header', 'body', 'footer', 'footer-wrapper']), _defineProperty(_class2, "propTypes", {
  title: String,
  value: Boolean,
  size: ['large', 'default', 'small', 'mini'],
  loading: Boolean,
  disabledOk: Boolean,
  okText: String,
  cancelText: String,
  ok: Function,
  cancel: Function,
  container: [String, Function],
  hideClose: Boolean,
  overlay: Boolean,
  closable: Boolean,
  terminate: Function,
  escClosable: Boolean,
  width: [String, Number],
  mode: ['destroy', 'hide']
}), _defineProperty(_class2, "events", {
  open: true,
  close: true,
  ok: true,
  cancel: true
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Dialog as default };
addStaticMethods(Dialog);
export { Dialog };