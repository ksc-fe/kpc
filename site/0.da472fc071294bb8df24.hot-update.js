webpackHotUpdate(0,{

/***/ "./site recursive ^\\.\\/.*index\\.json$":
false,

/***/ "./site/components/button/index.json":
false,

/***/ "./site/components/dialog/index.json":
false,

/***/ "./site/pages recursive ^\\.\\/\\.\\..*index\\.json$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./site/pages recursive ^\\.\\/\\.\\..*index\\.json$";

/***/ }),

/***/ "./site/pages/document/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _layout = __webpack_require__("./site/pages/layout.js");

var _layout2 = _interopRequireDefault(_layout);

var _index = __webpack_require__("./site/pages/document/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./site/pages/document/index.styl");

var _axios = __webpack_require__("./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Layout) {
    _inherits(_default, _Layout);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: '_init',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, path;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = void 0;

                                if (!process.node) {
                                    _context.next = 7;
                                    break;
                                }

                                path = this.get('path');

                                console.log('../..' + path + 'index.json');
                                data = !(function webpackMissingModule() { var e = new Error("Cannot find module \"..\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                                _context.next = 11;
                                break;

                            case 7:
                                _context.next = 9;
                                return _axios2.default.get(this.get('path') + 'index.json');

                            case 9:
                                data = _context.sent;

                                data = data.data;

                            case 11:
                                console.log(data);

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _init() {
                return _ref.apply(this, arguments);
            }

            return _init;
        }()
    }]);

    return _default;
}(_layout2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzIF5cXC5cXC9cXC5cXC4uKmluZGV4XFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsImRhdGEiLCJwcm9jZXNzIiwibm9kZSIsInBhdGgiLCJnZXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQSwrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUdLLGlCQUFPQSxRQUFQLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlPQyxvQzs7cUNBQ0FDLFFBQVFDLEk7Ozs7O0FBQ0ZDLG9DLEdBQU8sS0FBS0MsR0FBTCxDQUFTLE1BQVQsQzs7QUFDYkMsd0NBQVFDLEdBQVIsV0FBb0JILElBQXBCO0FBQ0FILHVDQUFPLDhIQUFQOzs7Ozs7dUNBRWEsZ0JBQU1JLEdBQU4sQ0FBYSxLQUFLQSxHQUFMLENBQVMsTUFBVCxDQUFiLGdCOzs7QUFBYkosb0M7O0FBQ0FBLHVDQUFPQSxLQUFLQSxJQUFaOzs7QUFFSkssd0NBQVFDLEdBQVIsQ0FBWU4sSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFaR0QsUSIsImZpbGUiOiIwLmRhNDcyZmMwNzEyOTRiYjhkZjI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zaXRlL3BhZ2VzIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcL1xcXFwuXFxcXC4uKmluZGV4XFxcXC5qc29uJFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9wYWdlcyBeXFwuXFwvXFwuXFwuLippbmRleFxcLmpzb24kXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvcGFnZXMgcmVjdXJzaXZlIF5cXC5cXC9cXC5cXC4uKmluZGV4XFwuanNvbiRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgTGF5b3V0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIGFzeW5jIF9pbml0KCkge1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgaWYgKHByb2Nlc3Mubm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0KCdwYXRoJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgLi4vLi4ke3BhdGh9aW5kZXguanNvbmApO1xuICAgICAgICAgICAgZGF0YSA9IHJlcXVpcmUoYC4uLy4uJHtwYXRofWluZGV4Lmpzb25gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoYCR7dGhpcy5nZXQoJ3BhdGgnKX1pbmRleC5qc29uYCk7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvcGFnZXMvZG9jdW1lbnQvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9