'use strict';

exports.__esModule = true;
exports.Datepicker = exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _index = require('./index.vdt');

var _index2 = _interopRequireDefault(_index);

require('./index.css');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function getNowDate() {
    // only date without time
    var now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    return now;
}

var Datepicker = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Datepicker, _Intact);

    function Datepicker() {
        (0, _classCallCheck3.default)(this, Datepicker);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Datepicker.prototype.defaults = function defaults() {
        return {
            value: undefined,
            clearable: false,
            maxDate: undefined,
            minDate: undefined,
            placeholder: undefined,
            disabled: false,
            disabledDate: function disabledDate(date) {
                return false;
            },

            multiple: false,
            size: 'default',
            type: 'date', // date | datetime
            hours: (0, _utils.range)(0, 23),
            minutes: (0, _utils.range)(0, 59),
            seconds: (0, _utils.range)(0, 59),
            disabledHours: false,
            disabledMinutes: false,
            disabledSeconds: false,

            _showDate: undefined,
            _now: getNowDate(),
            _isShowYearPicker: false,
            _isSelectTime: false
        };
    };

    Datepicker.prototype.select = function select(value, e) {
        value = this.getDateString(value);
        var type = this.get('type');
        if (!this.get('multiple')) {
            this.set('value', value);
            if (type !== 'datetime') {
                this.refs.calendar.hide();
            } else {
                e._rawEvent._dropdown = true;
                this.set('_isSelectTime', true);
            }
        } else {
            var values = this.get('value');
            if (!Array.isArray(values)) {
                values = [];
            } else {
                values = values.slice(0);
            }
            var index = values.indexOf(value);
            if (~index) {
                values.splice(index, 1);
            } else {
                values.push(value);
            }
            this.set('value', values);
        }
    };

    Datepicker.prototype.getDateString = function getDateString(date) {
        var _date = [date.getFullYear(), (0, _utils.strPad)(date.getMonth() + 1, 2), (0, _utils.strPad)(date.getDate(), 2)].join('-');
        if (this.get('type') !== 'datetime') {
            return _date;
        }
        var _time = [(0, _utils.strPad)(date.getHours(), 2), (0, _utils.strPad)(date.getMinutes(), 2), (0, _utils.strPad)(date.getSeconds(), 2)].join(':');
        return _date + ' ' + _time;
    };

    Datepicker.prototype.isEqual = function isEqual(a, b) {
        if (a && b) {
            return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
        }
        return false;
    };

    Datepicker.prototype.isLT = function isLT(a, b) {
        if (a && b) {
            var aYear = a.getFullYear();
            var bYear = b.getFullYear();
            if (aYear < bYear) {
                return true;
            } else if (aYear > bYear) {
                return false;
            }

            var aMonth = a.getMonth();
            var bMonth = b.getMonth();
            if (aMonth < bMonth) {
                return true;
            } else if (aMonth > bMonth) {
                return false;
            }

            var aDay = a.getDate();
            var bDay = b.getDate();
            if (aDay < bDay) {
                return true;
            } else if (aDay > bDay) {
                return false;
            }
        }

        return false;
    };

    Datepicker.prototype.isGT = function isGT(a, b) {
        return this.isLT(b, a);
    };

    Datepicker.prototype.onClear = function onClear(e) {
        e.stopPropagation();
        this.set('value', undefined);
    };

    Datepicker.prototype.prevMonth = function prevMonth() {
        this.setRelativeMonth(-1);
    };

    Datepicker.prototype.nextMonth = function nextMonth() {
        this.setRelativeMonth(1);
    };

    Datepicker.prototype.prevYear = function prevYear() {
        this.setRelativeYear(-1);
    };

    Datepicker.prototype.nextYear = function nextYear() {
        this.setRelativeYear(1);
    };

    Datepicker.prototype.setRelativeMonth = function setRelativeMonth(month) {
        var date = this.getShowDate();
        date.setMonth(date.getMonth() + month);
        this.set('_showDate', date);
    };

    Datepicker.prototype.setRelativeYear = function setRelativeYear(year) {
        var date = this.getShowDate();
        date.setFullYear(date.getFullYear() + year);
        this.set('_showDate', date);
    };

    Datepicker.prototype.setMonth = function setMonth(month) {
        var date = this.getShowDate();
        date.setMonth(month);
        this.set('_showDate', date);
    };

    Datepicker.prototype.setYear = function setYear(year) {
        var date = this.getShowDate();
        date.setFullYear(year);
        this.set('_showDate', date);
    };

    Datepicker.prototype.onChangeYear = function onChangeYear(c, value) {
        this.setYear(value);
    };

    Datepicker.prototype.onChangeMonth = function onChangeMonth(c, value) {
        this.setMonth(value);
    };

    Datepicker.prototype.getShowDate = function getShowDate() {
        var _get = this.get(),
            _showDate = _get._showDate,
            value = _get.value,
            _now = _get._now,
            multiple = _get.multiple;

        var values = multiple ? value || [] : [value];
        return new Date(_showDate || values[values.length - 1] || _now);
    };

    Datepicker.prototype.onHide = function onHide() {
        this.set({
            '_showDate': undefined,
            '_isShowYearPicker': false,
            '_isSelectTime': false
        });
    };

    Datepicker.prototype.onBeforeShow = function onBeforeShow() {
        this.set('_now', getNowDate());
    };

    Datepicker.prototype.showYearPicker = function showYearPicker() {
        this.set('_isShowYearPicker', !this.get('_isShowYearPicker'));
    };

    Datepicker.prototype.onChangeTime = function onChangeTime(type, c, v) {
        var _get2 = this.get(),
            value = _get2.value,
            _now = _get2._now;

        var valueDate = new Date(value || _now);
        valueDate['set' + type](v);
        this.set('value', this.getDateString(valueDate));
    };

    Datepicker.prototype.confirm = function confirm() {
        this.refs.calendar.hide();
    };

    Datepicker.prototype.cancel = function cancel(e) {
        e._rawEvent._dropdown = true;
        this.set('_isSelectTime', false);
    };

    return Datepicker;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    clearable: Boolean,
    disabled: Boolean,
    multiple: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Datepicker;
exports.Datepicker = Datepicker;