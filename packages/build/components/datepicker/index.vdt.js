'use strict';

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _scrollSelect = require('../scrollSelect');

var _scrollSelect2 = _interopRequireDefault(_scrollSelect);

var _grid = require('../grid');

var _utils = require('../utils');

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
        clearable = _self$get.clearable,
        className = _self$get.className,
        style = _self$get.style,
        name = _self$get.name,
        _showDate = _self$get._showDate,
        _now = _self$get._now,
        maxDate = _self$get.maxDate,
        minDate = _self$get.minDate,
        placeholder = _self$get.placeholder,
        disabled = _self$get.disabled,
        disabledDate = _self$get.disabledDate,
        multiple = _self$get.multiple,
        size = _self$get.size,
        _isShowYearPicker = _self$get._isShowYearPicker,
        _isSelectTime = _self$get._isSelectTime,
        type = _self$get.type,
        hours = _self$get.hours,
        minutes = _self$get.minutes,
        seconds = _self$get.seconds,
        disabledHours = _self$get.disabledHours,
        disabledMinutes = _self$get.disabledMinutes,
        disabledSeconds = _self$get.disabledSeconds;

    var classNameObj = (_classNameObj = {
        'k-datepicker': true,
        'k-disabled': disabled
    }, _classNameObj[className] = className, _classNameObj);

    var values = multiple ? value || [] : [value];

    var valueDate = new Date(values[values.length - 1] || _now);
    var showDate = new Date(_showDate || valueDate);

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, h(_tooltip2.default, { 'className': 'k-datepicker-content', 'position': function () {
            try {
                return [{ my: 'left top', at: 'left bottom' }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'trigger': 'click', 'showArrow': function () {
            try {
                return [false][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'transition': 'dropdown', 'ev-hide': function () {
            try {
                return [self.onHide][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-beforeShow': function () {
            try {
                return [self.onBeforeShow][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': h(_input2.default, { 'placeholder': function () {
                try {
                    return [placeholder == null ? type === 'datetime' ? '请选择日期和时间' : '请选择日期' : placeholder][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'readonly': function () {
                try {
                    return [true][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'value': function () {
                try {
                    return [values.join(', ')][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'clearable': function () {
                try {
                    return [clearable][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'ev-clear': function () {
                try {
                    return [self.onClear][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'name': function () {
                try {
                    return [name][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'disabled': function () {
                try {
                    return [disabled][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'size': function () {
                try {
                    return [size][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'children': null, '_context': $this, '_blocks': function (blocks) {
                var _blocks = {},
                    __blocks = extend({}, blocks);
                return (_blocks["suffix"] = function (parent) {
                    return h('i', null, null, 'ion-ios-calendar-outline');
                }) && (__blocks["suffix"] = function (parent) {
                    var self = this;
                    return blocks["suffix"] ? blocks["suffix"].call(this, function () {
                        return _blocks["suffix"].call(self, parent);
                    }) : _blocks["suffix"].call(this, parent);
                }), __blocks;
            }.call(this, {}) }), '_context': $this, '_blocks': function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks["content"] = function (parent) {
                return function () {
                    try {
                        return [!_isSelectTime][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) ? h('div', null, [h('div', null, [h(_button2.default, { 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'none', 'size': 'small', 'className': 'k-prev', 'ev-click': function () {
                        try {
                            return [self.prevYear][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': [h('i', null, null, 'k-icon ion-ios-arrow-left'), h('i', null, null, 'k-icon ion-ios-arrow-left')], '_context': $this }), h(_button2.default, { 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'none', 'size': 'small', 'className': 'k-prev', 'ev-click': function () {
                        try {
                            return [self.prevMonth][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-arrow-left'), '_context': $this }), h('span', { 'ev-click': function () {
                        try {
                            return [self.showYearPicker][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this) }, [h('span', null, [function () {
                    try {
                        return [showDate.getFullYear()][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '年'], 'k-text'), h('span', null, [function () {
                    try {
                        return [showDate.getMonth() + 1][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '月'], 'k-text')], 'k-text-wrapper'), h(_button2.default, { 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'none', 'size': 'small', 'className': 'k-next', 'ev-click': function () {
                        try {
                            return [self.nextYear][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': [h('i', null, null, 'k-icon ion-ios-arrow-right'), h('i', null, null, 'k-icon ion-ios-arrow-right')], '_context': $this }), h(_button2.default, { 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'none', 'size': 'small', 'className': 'k-next', 'ev-click': function () {
                        try {
                            return [self.nextMonth][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-arrow-right'), '_context': $this })], 'k-month c-clearfix'), function () {
                    try {
                        return [!_isShowYearPicker][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) ? h('div', null, _Vdt.utils.map(function () {
                    try {
                        return [['日', '一', '二', '三', '四', '五', '六']][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), function (value, key) {
                    return h('div', null, function () {
                        try {
                            return [value][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'k-weekday');
                }, this), 'k-weekdays') : undefined, function () {
                    try {
                        return [!_isShowYearPicker][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) ? h('div', null, ['\n                    ', function () {
                    var _this = this;

                    try {
                        return [function () {
                            var ret = [];
                            var start = new Date(showDate);
                            var month = start.getMonth();
                            start.setDate(1);
                            var startWeekday = start.getDay();
                            start.setDate(1 - startWeekday);

                            var _loop = function _loop(i) {
                                var _date = start.getDate();
                                var _month = start.getMonth();
                                var disabled = self.isGT(start, new Date(maxDate)) || self.isLT(start, new Date(minDate)) || disabledDate.call(self, self.getDateString(start));
                                ret.push(h('div', { 'ev-click': function () {
                                        try {
                                            return [!disabled && self.select.bind(self, new Date(start))][0];
                                        } catch (e) {
                                            _e(e);
                                        }
                                    }.call(_this) }, function () {
                                    try {
                                        return [_date][0];
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call(_this), _className(function () {
                                    try {
                                        return [{
                                            "k-day": true,
                                            "k-out": _month !== month,
                                            "k-active": values.find(function (value) {
                                                return self.isEqual(new Date(value), start);
                                            }),
                                            "k-today": self.isEqual(_now, start),
                                            "k-disabled": disabled
                                        }][0];
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call(_this))));
                                start.setDate(start.getDate() + 1);
                            };

                            for (var i = 0; i < 42; i++) {
                                _loop(i);
                            }
                            var result = [];

                            var _loop2 = function _loop2(i) {
                                result.push(h('div', null, function () {
                                    try {
                                        return [ret.slice(7 * i, 7 * (i + 1))][0];
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call(_this)));
                            };

                            for (var i = 0; i < 6; i++) {
                                _loop2(i);
                            }
                            return result;
                        }()][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '\n                '], 'k-calendar') : undefined, function () {
                    try {
                        return [_isShowYearPicker][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) ? h(_grid.Row, { 'className': 'k-year-picker', 'children': [h(_grid.Col, { 'span': '12', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [function (value) {
                                        return (0, _utils.range)(value - 5, value + 5);
                                    }][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [showDate.getFullYear()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeYear][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': $this }), '_context': $this }), h(_grid.Col, { 'span': '12', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [(0, _utils.range)(0, 11).map(function (i) {
                                        return { label: i + 1 + '\u6708', value: i };
                                    })][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [showDate.getMonth()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeMonth][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': $this }), '_context': $this })], '_context': $this }) : undefined]) : h('div', null, [h('div', null, ['\n                    ', hc('<Button type=\"none\" size=\"small\" class=\"k-prev\"\n                        ev-click={{ self.cancel.bind(self) }}\n                    >取消</Button>'), h('span', { 'ev-click': function () {
                        try {
                            return [self.cancel][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this) }, [h('span', null, [function () {
                    try {
                        return [showDate.getFullYear()][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '年'], 'k-text'), h('span', null, [function () {
                    try {
                        return [showDate.getMonth() + 1][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '月'], 'k-text')], 'k-text-wrapper'), '\n                    ', hc('<Button type=\"none\" size=\"small\" class=\"k-next\"\n                        ev-click={{ self.confirm.bind(self) }}\n                    >确认</Button>')], 'k-month c-clearfix'), h(_grid.Row, { 'children': [h(_grid.Col, { 'span': '8', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [hours.map(function (v) {
                                        return { label: (0, _utils.strPad)(v, 2), value: v };
                                    })][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [valueDate.getHours()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeTime.bind(self, 'Hours')][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'disabled': function () {
                                try {
                                    return [disabledHours][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': $this, '_blocks': function (blocks) {
                                var _blocks = {},
                                    __blocks = extend({}, blocks);
                                return (_blocks["append"] = function (parent) {
                                    return ':';
                                }) && (__blocks["append"] = function (parent) {
                                    var self = this;
                                    return blocks["append"] ? blocks["append"].call(this, function () {
                                        return _blocks["append"].call(self, parent);
                                    }) : _blocks["append"].call(this, parent);
                                }), __blocks;
                            }.call(this, {}) }), '_context': $this }), h(_grid.Col, { 'span': '8', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [minutes.map(function (v) {
                                        return { label: (0, _utils.strPad)(v, 2), value: v };
                                    })][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [valueDate.getMinutes()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeTime.bind(self, 'Minutes')][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'disabled': function () {
                                try {
                                    return [disabledMinutes][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': $this, '_blocks': function (blocks) {
                                var _blocks = {},
                                    __blocks = extend({}, blocks);
                                return (_blocks["append"] = function (parent) {
                                    return ':';
                                }) && (__blocks["append"] = function (parent) {
                                    var self = this;
                                    return blocks["append"] ? blocks["append"].call(this, function () {
                                        return _blocks["append"].call(self, parent);
                                    }) : _blocks["append"].call(this, parent);
                                }), __blocks;
                            }.call(this, {}) }), '_context': $this }), h(_grid.Col, { 'span': '8', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [seconds.map(function (v) {
                                        return { label: (0, _utils.strPad)(v, 2), value: v };
                                    })][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [valueDate.getSeconds()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeTime.bind(self, 'Seconds')][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'disabled': function () {
                                try {
                                    return [disabledSeconds][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': $this }), '_context': $this })], '_context': $this })], 'k-time-picker', 'time');
            }) && (__blocks["content"] = function (parent) {
                var self = this;
                return blocks["content"] ? blocks["content"].call(this, function () {
                    return _blocks["content"].call(self, parent);
                }) : _blocks["content"].call(this, parent);
            }), __blocks;
        }.call(this, {}) }, null, null, null, function (i) {
        widgets['calendar'] = i;
    }), _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};