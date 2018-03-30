'use strict';

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

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
        total = _self$get.total,
        current = _self$get.current,
        limit = _self$get.limit,
        limits = _self$get.limits,
        className = _self$get.className,
        showTotal = _self$get.showTotal,
        showGoto = _self$get.showGoto,
        counts = _self$get.counts,
        size = _self$get.size,
        rest = (0, _objectWithoutProperties3.default)(_self$get, ['total', 'current', 'limit', 'limits', 'className', 'showTotal', 'showGoto', 'counts', 'size']);

    if (!total) return hc(' pagination ');

    var classNameObj = (_classNameObj = {
        'k-pagination': true
    }, _classNameObj[className] = className, _classNameObj['k-' + size] = size !== 'default', _classNameObj);

    var totalPages = Math.ceil(total / limit) || 0;

    var paginationButton = function paginationButton(page) {
        return h('div', { 'ev-click': function () {
                try {
                    return [self.changePage.bind(self, page)][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, function () {
            try {
                return [page][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), _className(function () {
            try {
                return [{ 'k-page': true, 'k-active': page === current }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)));
    };

    var paginationDot = function paginationDot(callback) {
        return h('div', { 'ev-click': function () {
                try {
                    return [callback][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, '...', 'k-ellipsis');
    };

    return h('div', null, [h('div', null, function () {
        var _this = this;

        try {
            return [function () {
                var items = [];
                var minCount = Math.ceil(counts / 2);
                var maxCount = totalPages - minCount;
                var prevPage = current - 1;
                var nextPage = current + 1;

                // previous page button
                items.push(h('div', { 'ev-click': function () {
                        try {
                            return [prevPage < 1 ? undefined : self.prev][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this) }, h('i', null, null, 'ion-ios-arrow-left'), _className(function () {
                    try {
                        return [{ 'k-prev': true, 'k-disabled': prevPage < 1 }][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(_this))));

                if (totalPages > counts) {
                    if (current <= minCount) {
                        var max = counts - 2;
                        for (var i = 1; i <= max; i++) {
                            items.push(paginationButton(i));
                        }
                        items.push(paginationDot(self.fastNext));
                        items.push(paginationButton(totalPages));
                    } else if (current > minCount && current <= maxCount) {
                        items.push(paginationButton(1));
                        items.push(paginationDot(self.fastPrev));

                        var midCount = counts - 4;
                        var mid = Math.floor(midCount / 2);
                        var min = current - mid;
                        var _max = midCount % 2 === 1 ? current + mid : current + mid - 1;
                        for (var _i = min; _i <= _max; _i++) {
                            items.push(paginationButton(_i));
                        }

                        items.push(paginationDot(self.fastNext));
                        items.push(paginationButton(totalPages));
                    } else {
                        items.push(paginationButton(1));
                        items.push(paginationDot(self.fastPrev));

                        var _min = totalPages - counts + 3;
                        for (var _i2 = _min; _i2 <= totalPages; _i2++) {
                            items.push(paginationButton(_i2));
                        }
                    }
                } else {
                    for (var _i3 = 1; _i3 <= totalPages; _i3++) {
                        items.push(paginationButton(_i3));
                    }
                }

                // next page button
                items.push(h('div', { 'ev-click': function () {
                        try {
                            return [nextPage > totalPages ? undefined : self.next][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this) }, h('i', null, null, 'ion-ios-arrow-right'), _className(function () {
                    try {
                        return [{ 'k-next': true, 'k-disabled': nextPage > totalPages }][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(_this))));

                return items;
            }()][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'k-pages'), h('div', null, h(_select2.default, { 'v-model': 'limit', 'data': function () {
            try {
                return [limits.map(function (item) {
                    return { 'value': item, 'label': item + ' 条 / 页' };
                })][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'size': function () {
            try {
                return [size][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': null, '_context': $this, value: _getModel(self, 'limit'), 'ev-$change:value': function ev$changeValue(__c, __n) {
            _setModel(self, 'limit', __n);
        } }), 'k-limits'), function () {
        try {
            return [showGoto][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, ['\n        跳至', h(_input2.default, { 'size': function () {
            try {
                return [size][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'value': function () {
            try {
                return [current][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-change': function () {
            try {
                return [self._goto][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': null, '_context': $this }), '页\n    '], 'k-goto') : undefined, function () {
        try {
            return [showTotal][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, ['共 ', function () {
        try {
            return [total][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), ' 条'], 'k-total') : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};