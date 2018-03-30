'use strict';

exports.__esModule = true;
exports.Pagination = exports.default = undefined;

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

require('../../styles/kpc.styl');

require('./index.styl');

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

var Pagination = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Pagination, _Intact);

    function Pagination() {
        (0, _classCallCheck3.default)(this, Pagination);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Pagination.prototype.defaults = function defaults() {
        return {
            total: 0,
            current: 1,
            limit: 10,
            counts: 7,
            showTotal: true,
            limits: [10, 20, 50],
            // value: '',
            showGoto: false,
            size: 'default'
        };
    };

    Pagination.prototype._init = function _init() {
        var _this2 = this;

        // avoid setting incorrect value
        this.changePage(this.get('current'));

        this.on('$change:limit', function () {
            _this2.set('current', 1);
        });
    };

    Pagination.prototype.changePage = function changePage(page) {
        var _get = this.get(),
            total = _get.total,
            limit = _get.limit;

        var totalPages = Math.ceil(total / limit);

        if (page > totalPages) {
            page = totalPages;
        }
        if (page < 1) {
            page = 1;
        }

        this.set('current', page);
    };

    Pagination.prototype.prev = function prev() {
        this.changePage(this.get('current') - 1);
    };

    Pagination.prototype.next = function next() {
        this.changePage(this.get('current') + 1);
    };

    Pagination.prototype.fastPrev = function fastPrev() {
        var page = this.get('current') - Math.ceil(this.get('counts') / 2);
        this.changePage(page);
    };

    Pagination.prototype.fastNext = function fastNext() {
        var page = this.get('current') + Math.ceil(this.get('counts') / 2);
        this.changePage(page);
    };

    Pagination.prototype._goto = function _goto(e) {
        // const regexp = /^[1-9]\d*$/;
        var value = parseInt(e.target.value) || 1;
        this.changePage(value);
    };

    return Pagination;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    showGoto: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Pagination;
exports.Pagination = Pagination;