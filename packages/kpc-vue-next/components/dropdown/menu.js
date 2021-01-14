import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _Promise from "@babel/runtime-corejs3/core-js/promise";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _setTimeout from "@babel/runtime-corejs3/core-js/set-timeout";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './menu.vdt';
import _position from '../moveWrapper/position';
import { findParentComponent, getTransition } from '../utils';
import Dropdown from './dropdown';
import initMouseOutsidable from './mouseOutsidable';
var DropdownMenu = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(DropdownMenu, _Intact);

  var _super = _createSuper(DropdownMenu);

  function DropdownMenu() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.defaults = function defaults() {
    return {
      value: false,
      trigger: 'hover',
      position: {},
      transition: 'c-slidedown',
      of: 'self',
      // self | parent
      container: undefined,
      // indicate that it is use in Dropdown or alone for lookup dropdown instance in _mount
      _useInDropdown: false
    };
  };

  _proto._init = function _init() {
    var _this = this,
        _context;

    this.subDropdowns = [];
    this.items = [];
    this.focusIndex = -1;
    this.locked = false;
    this.on('$change:value', function (c, v) {
      // contextmenu has not dropdown
      if (_this.dropdown) {
        // update parent we must specify async to true, #408
        _this.dropdown.set('_isShow', v, {
          async: true
        });
      }
    });
    this.on('$changed:value', function (c, value) {
      if (value) {
        _this.trigger('show', _this);
      } else {
        _this.trigger('hide', _this);
      }
    });

    _forEachInstanceProperty(_context = ['of', 'position']).call(_context, function (item) {
      _this.on("$changed:" + item, function () {
        if (_this.get('value')) {
          _this.position();
        }
      });
    });

    initMouseOutsidable(this);
  };

  _proto._mount = function _mount() {
    // maybe it is used as contextmenu
    if (!this.get('_useInDropdown')) return;

    var parent = this._getParent();

    if (parent) parent.subDropdowns.push(this); // the previous sibling is Dropdown

    var triggerElement = this.element.previousSibling; // in react, it may be a comment which value is ' react-mount-point-unstable '
    // and it is may be a leaving animation element
    // so we must look up it until the header

    var dropdown;

    while (triggerElement) {
      if (dropdown = triggerElement._dropdown) {
        this.dropdown = dropdown;
        dropdown.menu = this;
        break;
      }

      triggerElement = triggerElement.previousSibling;
    } // when mount, the child animate element mount first
    // if we use appearStart to show this menu
    // the parent component can not be get correctly
    // unless we find parent component in `position` method again
    // so we do this at here instead of appearStart callback
    //
    // find parent component in `position` method instead of
    // if (this.get('value')) {
    // this._onShow();
    // }

  };

  _proto._getParent = function _getParent() {
    if (this.parent === undefined) {
      this.parent = this._findParentDropdownMenu() || null;
    }

    return this.parent;
  };

  _proto._findParentDropdownMenu = function _findParentDropdownMenu() {
    return findParentComponent(DropdownMenu, this, true);
  };

  _proto.show = function show() {
    clearTimeout(this.timer);
    this.set('value', true);

    var parent = this._findParentDropdownMenu();

    if (parent) {
      var showedMenu = parent._showedMenu;

      if (showedMenu && showedMenu !== this) {
        showedMenu.hide(true);
      }

      parent._showedMenu = this; // hide last showed menu will unlock the parent
      // so we lock it here when show this menu

      parent.locked = true; // because parent will hide when click outside
      // we call parent show method to clear the timer of hiding

      parent.show();
    }
  };

  _proto.hide = function hide(immediately) {
    var _this2 = this;

    if (!this.get('value')) return;

    if (!immediately) {
      this.timer = _setTimeout(function () {
        _this2._hide();
      }, 200);
    } else {
      this._hide();
    }
  };

  _proto._hide = function _hide() {
    this.set('value', false); // hide sub dropdown

    for (var i = 0; i < this.subDropdowns.length; i++) {
      this.subDropdowns[i].hide(true);
    }
  };

  _proto.toggle = function toggle() {
    this.set('value', !this.get('value'));
  };

  _proto.position = function position() {
    var _this3 = this;

    // if the dropdown menu is nested, then show the parent first
    // and show the child menu later
    var p = function p(_of, transition) {
      var _using2;

      _position(_this3.refs.menu.element, _Object$assign({
        my: 'center top+8',
        at: 'center bottom',
        of: _of,
        using: function using(feedback) {
          _using2 = function _using() {
            // let the child menu has the same transition with parent menu
            _this3.set('transition', transition || getTransition(feedback));

            _using2 = null;
          }; // if it is the first menu, getTransition immediately


          if (!transition) {
            _using2();
          }
        }
      }, _this3.get('position')));

      _this3.positioned = true;

      _this3.trigger('positioned', transition);

      _using2 && _using2();
    };

    var _of = this.get('of');

    if (_of === 'parent') {
      var parent = this._getParent();

      if (parent) {
        _of = parent.refs.menu.element;

        if (parent.positioned) {
          p(_of);
        } else {
          return new _Promise(function (resolve) {
            parent.one('positioned', function (transition) {
              p(_of, transition || parent.get('transition'));
              resolve();
            });
          });
        }
      }
    } else if (_of === 'self') {
      _of = this.dropdown.element;
      p(_of);
    } else {
      p(_of);
    }
  };

  _proto._onShow = function _onShow() {
    this._enterEnd = false;
    this.unFocusLastItem();

    this._addDocumentEvents();

    return this.position();
  };

  _proto._addDocumentEvents = function _addDocumentEvents() {
    var parent = this.parent;

    if (!parent) {
      // no matter what the trigger is
      // we should let the layer hide when click document. #52
      // in vue the click event of trigger element
      // will propagate to document immediately
      // and this will lead close the layer. #209
      // we need to set this _dropdown to `this` to indentify
      // which component has been clicked. Otherwise the menu
      // will not hide when click the other component. #221
      if (this.__event) this.__event._dropdown = this; // we use mousedown event instead of click event,
      // so that we can press down mouse and move it to outside
      // and don't hide the dropdown
      // emm... we can't use this way, because it can't hide menu when click trigger element
      // use mousedown -> mouseup and _mousedown flag instead

      document.addEventListener('click', this._onDocumentClick, true);
      document.addEventListener('click', this._documentClickHandler);
    } else {
      parent.locked = true;
    }

    document.addEventListener('keydown', this._onKeydown);
  };

  _proto._removeDocumentEvents = function _removeDocumentEvents() {
    this.positioned = false;
    var parent = this.parent;

    if (!parent) {
      document.removeEventListener('click', this._onDocumentClick, true);
      document.removeEventListener('click', this._documentClickHandler);
    } else {
      parent.locked = false;
    }

    document.removeEventListener('keydown', this._onKeydown);
  };

  _proto._onDocumentClick = function _onDocumentClick(e) {
    var _this4 = this;

    // in IE, if the event has not call stopImmediatePropagation,
    // the document click will also be called after it has been removed
    var _menu = this.refs.menu;
    if (!_menu) return;
    var target = e.target;
    var menu = _menu.element; // if we mousedown on the menu, ignore this click

    if (this._mousedown) return; // is a dropdown menu

    if (menu === target || menu.contains(target)) return; // is click on sub menu

    if (this._isClickSubMenu(target, this.subDropdowns)) return; // custom flag to indicate that the event does not lead to close menu

    if (e._dropdown === true || e._dropdown === this) return; // to indicate this click event will hide layer
    // and don't show it again when the target is the trigger element

    e._hide = this.dropdown; // because we bind document click handler to hide menu in capture phase
    // and we get cancelBubble is true even if we stopPropagation
    // some action like clear in datepicker will prevent this menu hiding
    // we call this handler as soon as the event bubble to docuemnt
    //
    // use Array, #331

    if (!e._handler) e._handler = [];

    e._handler.push(function () {
      return _this4.hide(true);
    }); // const handler = () => {
    // if (!e._cancelBubble) {
    // this.hide(true);
    // }
    // };
    // this.documentTimer = setTimeout(handler);

  };

  _proto._documentClickHandler = function _documentClickHandler(e) {
    var _context2;

    e._handler && _forEachInstanceProperty(_context2 = e._handler).call(_context2, function (fn) {
      return fn();
    });
  };

  _proto._onKeydown = function _onKeydown(e) {
    if (this.locked) {
      return;
    }

    switch (e.keyCode) {
      // down
      case 40:
        this._focusNextItem(e);

        break;
      // up

      case 38:
        this._focusPrevItem(e);

        break;
      // right

      case 39:
        this._showSubMenu(e);

        break;
      // left

      case 37:
        this._hideSubMenu(e);

        break;
      // enter

      case 13:
        this._selectItem(e);

        break;
    }
  };

  _proto._focusNextItem = function _focusNextItem(e) {
    // const parent = this._findParentDropdownMenu();
    // if (parent && this.focusIndex < 0) {
    // return;
    // }
    e.preventDefault();
    this.focusItemByIndex(this.focusIndex + 1, 'down');
  };

  _proto._focusPrevItem = function _focusPrevItem(e) {
    // const parent = this._findParentDropdownMenu();
    // if (parent && this.focusIndex < 0) {
    // return;
    // }
    e.preventDefault();
    this.focusItemByIndex(this.focusIndex - 1, 'up');
  };

  _proto.focusItemByIndex = function focusItemByIndex(index, direction) {
    if (direction === void 0) {
      direction = 'down';
    }

    var items = this.items;
    var max = items.length - 1;
    this.unFocusLastItem();

    function fixIndex(index) {
      if (index > max) {
        index = 0;
      } else if (index < 0) {
        index = max;
      }

      return index;
    }

    index = fixIndex(index);
    var i = 0;

    while (i <= max && items[index] && items[index].get('disabled')) {
      index = fixIndex(direction === 'down' ? index + 1 : index - 1);
      i++;
    } // all items are disabled


    if (i > max) return;
    this.focusIndex = index;
    items[index].focus();
  };

  _proto.unFocusLastItem = function unFocusLastItem() {
    var oldIndex = this.focusIndex;
    var items = this.items;

    if (oldIndex > -1 && items[oldIndex]) {
      items[oldIndex].unFocus();
      this.focusIndex = -1;
    }
  };

  _proto._selectItem = function _selectItem(e) {
    this._showSubMenu(e);

    if (this.focusIndex > -1) {
      e.preventDefault();
      this.items[this.focusIndex] && this.items[this.focusIndex].select(e);
    }
  };

  _proto._showSubMenu = function _showSubMenu(e) {
    var parent = this.parent;
    if (!parent && this.focusIndex < 0) return;
    e.preventDefault();

    if (parent && this.focusIndex < 0) {
      this.focusItemByIndex(0);
    } else if (this.focusIndex > -1) {
      // maybe the items has been filtered, #50
      this.items[this.focusIndex] && this.items[this.focusIndex].showMenuAndFocus(e);
    }
  };

  _proto._hideSubMenu = function _hideSubMenu(e) {
    if (this.focusIndex > -1) {
      e.preventDefault();
      this.items[this.focusIndex].hideMenu();
      var parent = findParentComponent(DropdownMenu, this, true);

      if (parent) {
        this.dropdown.hide(null, null, true);
      }
    }
  };

  _proto.focusItem = function focusItem(item) {
    var _context3;

    var index = _indexOfInstanceProperty(_context3 = this.items).call(_context3, item);

    this.focusItemByIndex(index);
  };

  _proto._isClickSubMenu = function _isClickSubMenu(target, subMenus) {
    var ret = false;

    for (var i = 0; i < subMenus.length; i++) {
      var subDropdownMenu = subMenus[i];
      var subMenu = subDropdownMenu.refs.menu;

      if (subMenu) {
        if (target === subMenu.element || subMenu.element.contains(target) || subDropdownMenu._mousedown) {
          ret = true;
          break;
        } else {
          ret = this._isClickSubMenu(target, subDropdownMenu.subDropdowns);
          if (ret) break;
        }
      }
    }

    return ret;
  };

  _proto._destroy = function _destroy() {
    var parent = this._findParentDropdownMenu();

    if (parent) {
      var subDropdowns = parent.subDropdowns;

      _spliceInstanceProperty(subDropdowns).call(subDropdowns, _indexOfInstanceProperty(subDropdowns).call(subDropdowns, this), 1);
    }

    clearTimeout(this.timer); // clearTimeout(this.documentTimer);

    this._removeDocumentEvents();
  };

  return DropdownMenu;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "propTypes", {
  value: Boolean,
  trigger: ['hover', 'click'],
  position: Object,
  transition: String,
  // Event is undefined in NodeJs
  of: ['self', 'parent', Object
  /* Intact Event */
  , typeof Event === 'undefined' ? undefined : Event],
  container: [String, Function]
}), _defineProperty(_class2, "events", {
  show: true,
  hide: true,
  positioned: true
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { DropdownMenu as default };