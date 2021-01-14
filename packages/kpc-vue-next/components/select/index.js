import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js/instance/trim";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js/instance/filter";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Set from "@babel/runtime-corejs3/core-js/set";
import _Array$from from "@babel/runtime-corejs3/core-js/array/from";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './index.vdt';
import '../../styles/kpc.css';
import './index.css';
import Option from './option';
import Group from './group';
import { selectInput, _$, isStringOrNumber, toggleArray } from '../utils';
import { dispatchEvent } from '../datepicker/utils';
var isEqual = Intact.utils.isEqual;
var Select = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Select, _Intact);

  var _super = _createSuper(Select);

  function Select() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Select.prototype;

  _proto.defaults = function defaults() {
    return {
      data: [],
      value: '',
      multiple: false,
      // 是否支持多选
      disabled: false,
      clearable: false,
      // 是否可清空
      filterable: false,
      // 搜索筛选
      filter: function filter(keywords, props) {
        var _context3, _context4;

        var valid = false;
        var tmp;

        if (keywords == null || props.label && ~_indexOfInstanceProperty(_context3 = props.label.toLowerCase()).call(_context3, tmp = keywords.toLowerCase()) || isStringOrNumber(props.value) && ~_indexOfInstanceProperty(_context4 = String(props.value).toLowerCase()).call(_context4, tmp)) {
          valid = true;
        }

        return valid;
      },
      keywords: undefined,
      placeholder: undefined,
      size: 'default',
      fluid: false,
      width: undefined,
      allowUnmatch: false,
      card: false,
      // 卡片式分组
      container: undefined,
      inline: false,
      loading: false,
      hideIcon: false,
      position: {
        my: 'left top+8',
        at: 'left bottom'
      },
      searchable: false,
      _show: false,
      _activeLabel: undefined,
      _checkedKeys: []
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.on('$change:value', function (c, v) {
      _this.set('_checkedKeys', v || []);
    });
    this.on('$changed:value', function () {
      if (_this._isMultiple()) {
        _this._refreshPosition();
      }
    });
  };

  _proto.hide = function hide() {
    this.refs.menu.hide(true);
  };

  _proto._isMultiple = function _isMultiple() {
    return this.get('multiple');
  };

  _proto._refreshPosition = function _refreshPosition() {
    if (this.get('_show')) {
      this.refs.menu.position();
    }
  };

  _proto._onClear = function _onClear(e) {
    if (this.get('disabled')) return;
    e.stopPropagation();
    var clearV = !this._isMultiple() ? '' : [];
    this.set('value', clearV);

    if (!this.get('_show')) {
      this.trigger('change', clearV);
    }
  };

  _proto._onSelect = function _onSelect(value) {
    // if we show search input in menu and it supports multiple selections,
    // then the checkbox will be showed.
    // We do nothing on select in this case and add value on click confirm button
    var _this$get = this.get(),
        searchable = _this$get.searchable,
        multiple = _this$get.multiple;

    if (searchable && multiple) return;

    if (!this._isMultiple()) {
      this.set('value', value, {
        async: true
      });
    } else {
      var values = this.get('value');
      values = toggleArray(values, value);
      this.set('value', values, {
        async: true
      });

      this._focusInput();
    }

    this._resetSearch();
  };

  _proto._onSearch = function _onSearch(e) {
    var _context5;

    this.set('keywords', _trimInstanceProperty(_context5 = e.target.value).call(_context5)); // always show menu on searching

    this.refs.menu.show();
    this.refs.menu.focusItemByIndex(0); // the position may be flip, and the select input height my change height too,
    // so we should reset the position

    this.refs.menu.position();
  };

  _proto._resetSearch = function _resetSearch() {
    this.set('keywords', undefined, {
      async: true
    });
  };

  _proto._onChangeShow = function _onChangeShow(c, value) {
    if (value) {
      this._oldValue = this.get('value');
    }

    this.set('_show', value); // reset the _activeLabel if show

    this._setActiveLabelSilent(undefined);

    if (!value) {
      this._onBlur();

      if (this.get('searchable') && this.get('multiple')) {
        // set the _checkedKeys to value
        this.set('_checkedKeys', this.get('value') || []);
      }
    }

    this.trigger(value ? 'show' : 'hide');
  }
  /**
   * @brief let the blur method be called after select
   * if we have selected the option, then the keywords have been set to undefined
   * in this case, we do nothing, otherwise we reset it
   */
  ;

  _proto._onBlur = function _onBlur() {
    var _this$get2 = this.get(),
        keywords = _this$get2.keywords,
        allowUnmatch = _this$get2.allowUnmatch;

    if (allowUnmatch && keywords != null) {
      this.set({
        value: keywords
      });
    } // this.timer = setTimeout(() => {


    if (this.get('keywords') != null) {
      this._resetSearch();
    } // }, 200);

  };

  _proto._selectInput = function _selectInput(e) {
    selectInput(e.target);
  } // _onFocus(e) {
  // clearTimeout(this.timer);
  // }
  ;

  _proto._onFocusout = function _onFocusout() {
    this.refs.dropdown.hide();
  };

  _proto._delete = function _delete(value, e) {
    var _context6;

    if (this.get('disabled')) return;
    e.stopPropagation();

    var values = _sliceInstanceProperty(_context6 = this.get('value')).call(_context6, 0);

    var index = _indexOfInstanceProperty(values).call(values, value);

    _spliceInstanceProperty(values).call(values, index, 1);

    this.set('value', values);

    this._focusInput();

    if (!this.get('_show')) {
      this.trigger('change', values);
    }
  };

  _proto._focusInput = function _focusInput() {
    if (this.get('filterable')) {
      this.refs.input.focus();
    }
  };

  _proto._position = function _position() {
    var menuElement = this.refs.menu.vdt.vNode.children.element;
    var width = this.element.offsetWidth; // const menuWidth = menuElement.offsetWidth;
    // if (width > menuWidth) {
    // menuElement.style.width = `${width}px`;
    // }

    menuElement.style.minWidth = width + "px";
  };

  _proto._onKeypress = function _onKeypress(e) {
    this.trigger('keypress', e);

    if (e.keyCode === 13) {
      this.refs.wrapper.click();
    }
  };

  _proto._onKeydown = function _onKeydown(e) {
    this.trigger('keydown', e);

    if (e.keyCode === 9) {
      // tab
      this.refs.dropdown.hide();
    }
  };

  _proto._clearValue = function _clearValue() {
    this.set('value', '', {
      update: false
    });
  };

  _proto._setActiveLabelSilent = function _setActiveLabelSilent(label) {
    this.set('_activeLabel', label, {
      silent: true
    });
  };

  _proto.handleProps = function handleProps(props, labelObj) {
    var _this$get3 = this.get(),
        value = _this$get3.value,
        filterable = _this$get3.filterable,
        keywords = _this$get3.keywords,
        filter = _filterInstanceProperty(_this$get3),
        searchable = _this$get3.searchable;

    var active = false;
    var valid = false;

    if (!this._isMultiple()) {
      if (props.value === value) {
        // set label
        labelObj.label = props.label;
        active = true;
      } else {
        active = false;
      }
    } else if (_Array$isArray(value)) {
      var index = _indexOfInstanceProperty(value).call(value, props.value);

      if (~index) {
        // keep order consistent
        labelObj.labels[index] = props.label;
        active = true;
      } else {
        active = false;
      }
    }

    if (!filterable && !searchable || filter.call(this, keywords, props)) {
      valid = true;
    }

    return {
      active: active,
      valid: valid
    };
  }
  /**
   * don't trigger focusout event when layer is showing,
   * only trigger focusout when it hidden to make FormItem to validate it
   * #449
   */
  ;

  _proto._onInputFocusOut = function _onInputFocusOut(e) {
    if (this.get('_show')) {
      e.stopPropagation();
    }
  };

  _proto._onHide = function _onHide() {
    this._triggerChange();

    dispatchEvent(this.element, 'focusout');
  };

  _proto._selectAll = function _selectAll(allShowedValues) {
    this.set('_checkedKeys', addKeys(this.get('value'), allShowedValues));
  };

  _proto._unselectAll = function _unselectAll(allShowedValues) {
    this.set('_checkedKeys', removeKeys(this.get('value'), allShowedValues));
  };

  _proto._toggleSelect = function _toggleSelect(allShowedValues) {
    var _this$get4 = this.get(),
        value = _this$get4.value,
        _checkedKeys = _this$get4._checkedKeys;

    var checked = [];
    var unchecked = [];

    _forEachInstanceProperty(allShowedValues).call(allShowedValues, function (item) {
      if (_indexOfInstanceProperty(_checkedKeys).call(_checkedKeys, item) > -1) {
        checked.push(item);
      } else {
        unchecked.push(item);
      }
    });

    this.set('_checkedKeys', removeKeys(addKeys(value, unchecked), checked));
  };

  _proto._confirm = function _confirm() {
    this.set('value', this.get('_checkedKeys'));
    this.hide();
  };

  _proto._triggerChange = function _triggerChange() {
    var _this$get5 = this.get(),
        value = _this$get5.value;

    if (!isEqual(this._oldValue, value)) {
      this._oldValue = value;
      this.trigger('change', value);
    }
  };

  return Select;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "propTypes", {
  data: Array,
  multiple: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  filter: Function,
  keywords: String,
  placeholder: String,
  size: ['large', 'default', 'small', 'mini'],
  fluid: Boolean,
  width: [Number, String],
  allowUnmatch: Boolean,
  card: Boolean,
  container: [Function, String],
  inline: Boolean,
  loading: Boolean,
  hideIcon: Boolean,
  position: Object,
  searchable: Boolean
}), _defineProperty(_class2, "events", {
  keypress: true,
  keydown: true,
  show: true,
  hide: true,
  change: true
}), _defineProperty(_class2, "blocks", ['format', 'value', 'values', 'menu']), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Select as default };

function addKeys(origin, keys) {
  var _context;

  return _Array$from(new _Set(_concatInstanceProperty(_context = []).call(_context, keys, origin || [])));
}

function removeKeys(origin, keys) {
  var _context2;

  return _filterInstanceProperty(_context2 = origin || []).call(_context2, function (item) {
    return _indexOfInstanceProperty(keys).call(keys, item) < 0;
  });
}

export { Select, Option, Group as OptionGroup };