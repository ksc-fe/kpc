'use strict';

var _spinner = require('../spinner');

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _self$get = self.get(),
        value = _self$get.value,
        min = _self$get.min,
        max = _self$get.max,
        className = _self$get.className,
        disabled = _self$get.disabled,
        isRange = _self$get.isRange,
        isInnerText = _self$get.isInnerText,
        isShowInput = _self$get.isShowInput,
        isShowEnd = _self$get.isShowEnd,
        unit = _self$get.unit,
        step = _self$get.step,
        _isDragging = _self$get._isDragging,
        _isFirst = _self$get._isFirst,
        _inputValue = _self$get._inputValue,
        _isSecond = _self$get._isSecond,
        _sliderValue = _self$get._sliderValue,
        style = _self$get.style;

    var classNameObj = (_classNameObj = {
        'k-slider': true,
        'k-disabled': disabled
    }, _classNameObj[className] = className, _classNameObj['k-dragging'] = _isDragging, _classNameObj);

    var sliderWidth = max - min;

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h('div', { 'ev-click': function () {
            try {
                return [self._clickWrapper][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h('div', { 'style': function () {
            try {
                return [isRange ? {
                    width: Math.abs(_sliderValue[1] - _sliderValue[0]) / sliderWidth * 100 + '%',
                    left: (Math.min(_sliderValue[0], _sliderValue[1]) - min) / sliderWidth * 100 + '%'
                } : {
                    width: (_sliderValue - min) / sliderWidth * 100 + '%'
                }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, null, 'k-bar'), h('div', { 'style': function () {
            try {
                return [{
                    left: isRange ? (_sliderValue[0] - min) / sliderWidth * 100 + '%' : (_sliderValue - min) / sliderWidth * 100 + '%'
                }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-mousedown': function () {
            try {
                return [isRange ? self._onDrag.bind(self, '_isFirst') : self._onDrag.bind(self, undefined)][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self._stopPropagation][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [isInnerText][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, function () {
        try {
            return [isRange ? value : value[0]][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)) : undefined, _className(function () {
        try {
            return [{
                "k-handle": true,
                "k-active": _isFirst && _sliderValue[1] === self._max || _isSecond && value[0] !== self._min
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), null, function () {
        try {
            return [function (dom) {
                return self.$sliderFirstBtn = dom;
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), function () {
        try {
            return [isRange][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', { 'ev-mousedown': function () {
            try {
                return [self._onDrag.bind(self, "_isSecond")][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'style': function () {
            try {
                return [{
                    left: (_sliderValue[1] - min) / sliderWidth * 100 + '%'
                }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [isInnerText][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, function () {
        try {
            return [value[1]][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)) : undefined, _className(function () {
        try {
            return [{
                "k-handle": true,
                "k-active": _isSecond && _sliderValue[0] === self._min || _isFirst && _sliderValue[1] !== self._max
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), null, function () {
        try {
            return [function (dom) {
                return self.$sliderSecondBtn = dom;
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)) : undefined, function () {
        try {
            return [isShowEnd][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, [h('span', null, [function () {
        try {
            return [min + unit][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), ' ']), h('span', null, function () {
        try {
            return [max + unit][0];
        } catch (e) {
            _e(e);
        }
    }.call(this))], 'k-box') : undefined], 'k-wrapper', null, function () {
        try {
            return [function (dom) {
                return self.$slider = dom;
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), function () {
        try {
            return [isShowInput && !isRange][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h(_spinner2.default, { 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'max': function () {
            try {
                return [max][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'min': function () {
            try {
                return [min][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'v-model': '_inputValue', 'step': function () {
            try {
                return [step][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': null, '_context': $this, value: _getModel(self, '_inputValue'), 'ev-$change:value': function ev$changeValue(__c, __n) {
            _setModel(self, '_inputValue', __n);
        } }) : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};