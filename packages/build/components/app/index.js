'use strict';

exports.__esModule = true;
exports.App = exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class;

var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _index = require('./index.vdt');

var _index2 = _interopRequireDefault(_index);

require('./index.css');

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

var serverStyleCleanup = void 0;
if (process.ssr) {
    serverStyleCleanup = require('node-style-loader/clientCleanup');
}

var App = (_dec = _intact2.default.template(), (_class = function (_Intact) {
    (0, _inherits3.default)(App, _Intact);

    function App() {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    App.prototype.defaults = function defaults() {
        return {
            view: undefined,
            container: undefined,
            loading: false
        };
    };

    App.prototype.showLoading = function showLoading() {
        this.set('loading', true);
    };

    App.prototype.hideLoading = function hideLoading() {
        this.set('loading', false);
    };

    App.prototype._init = function _init() {
        if (!process.ssr && process.browser) {
            _intact2.default.mount(this, this.get('container'));
        }
    };

    App.prototype.render = function render(Page, data) {
        var _this2 = this;

        this._current = Page;
        return new _promise2.default(function (resolve, reject) {
            if (!process.ssr && process.node) return reject();

            var page = new Page(data);
            // for debug
            if (process.browser) {
                window.__page = page;
            }
            page.$app = _this2;

            var done = function done() {
                if (_this2._current === Page) {
                    _this2.set('view', page);
                }
                resolve();
            };

            if (page.inited) {
                done();
            } else {
                page.on('$inited', done);
            }
        });
    };

    App.prototype.load = function load(Page, data) {
        var _this3 = this;

        return this.render(Page, data).then(function () {
            if (process.ssr && process.browser && !_this3.rendered) {
                _intact2.default.hydrate(_this3, _this3.get('container'));
                serverStyleCleanup();
            }
        });
    };

    (0, _createClass3.default)(App, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return App;
}(_intact2.default), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = App;
exports.App = App;