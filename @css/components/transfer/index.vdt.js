'use strict';

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj,
        _this = this;

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
        data = _self$get.data,
        className = _self$get.className,
        style = _self$get.style,
        value = _self$get.value,
        leftChecked = _self$get.leftChecked,
        rightChecked = _self$get.rightChecked,
        filterable = _self$get.filterable,
        filter = _self$get.filter,
        label = _self$get.label,
        placeholder = _self$get.placeholder,
        leftTitle = _self$get.leftTitle,
        rightTitle = _self$get.rightTitle;

    var classNameObj = (_classNameObj = {
        'k-transfer': true
    }, _classNameObj[className] = className, _classNameObj);

    var Panel = function Panel(props) {
        var keywords = self.get(props.model + 'Keywords');
        return h('div', null, [h('div', null, function () {
            try {
                return [props.title][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this), 'k-title'), function () {
            try {
                return [filterable][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this) ? h(_input2.default, { 'placeholder': function () {
                try {
                    return [placeholder][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), 'v-model': function () {
                try {
                    return [props.model + 'Keywords'][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), 'clearable': function () {
                try {
                    return [true][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), 'fluid': function () {
                try {
                    return [true][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), 'children': null, '_context': $this, '_blocks': function (blocks) {
                var _blocks = {},
                    __blocks = extend({}, blocks);
                return (_blocks["append"] = function (parent) {
                    return h(_button2.default, { 'icon': function () {
                            try {
                                return [true][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'type': 'none', 'children': h('i', null, null, 'ion-ios-search'), '_context': $this });
                }) && (__blocks["append"] = function (parent) {
                    var self = this;
                    return blocks["append"] ? blocks["append"].call(this, function () {
                        return _blocks["append"].call(self, parent);
                    }) : _blocks["append"].call(this, parent);
                }), __blocks;
            }.call(_this, {}), value: _getModel(self, function () {
                try {
                    return [props.model + 'Keywords'][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this)), 'ev-$change:value': function ev$changeValue(__c, __n) {
                _setModel(self, function () {
                    try {
                        return [props.model + 'Keywords'][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), __n);
            } }) : undefined, h(Animate, { 'className': 'k-list', 'children': _Vdt.utils.map(function () {
                try {
                    return [keywords ? props.data.filter(function (item) {
                        return filter(item, keywords);
                    }) : props.data][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), function (value, key) {
                return h(Animate, { 'className': _className(function () {
                        try {
                            return [{ "k-item": true, "k-disabled": value.disabled }][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this)), 'key': function () {
                        try {
                            return [value][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'a:transition': 'fade', 'ev-click': function () {
                        try {
                            return [self._onClickLabel][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': h(_checkbox2.default, { 'v-model': function () {
                            try {
                                return [props.model + 'Checked'][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'name': function () {
                            try {
                                return [props.model][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'trueValue': function () {
                            try {
                                return [value][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'disabled': function () {
                            try {
                                return [value.disabled][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'ev-click': function () {
                            try {
                                return [self._onCheckboxChange.bind(self, props.model, key)][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'children': function () {
                            try {
                                return [label.call(self, value, key, props.model)][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), '_context': $this, value: _getModel(self, function () {
                            try {
                                return [props.model + 'Checked'][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this)), 'ev-$change:value': function ev$changeValue(__c, __n) {
                            _setModel(self, function () {
                                try {
                                    return [props.model + 'Checked'][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), __n);
                        } }), '_context': $this });
            }, _this), '_context': $this })], 'k-panel');
    };

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h(Panel, { 'data': function () {
            try {
                return [data.filter(function (item) {
                    return !~value.indexOf(item);
                })][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'model': 'left', 'title': function () {
            try {
                return [leftTitle][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': null, '_context': $this }), h('div', null, [h(_button2.default, { 'circle': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'icon': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [!rightChecked.length][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self._remove][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-arrow-left'), '_context': $this }), h(_button2.default, { 'circle': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'icon': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [!leftChecked.length][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self._add][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-arrow-right'), '_context': $this })], 'k-arrows'), h(Panel, { 'data': function () {
            try {
                return [data.filter(function (item) {
                    return ~value.indexOf(item);
                })][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'model': 'right', 'title': function () {
            try {
                return [rightTitle + ' (' + value.length + ')'][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': null, '_context': $this })], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};