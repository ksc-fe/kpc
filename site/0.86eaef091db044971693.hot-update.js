webpackHotUpdate(0,{

/***/ "./site recursive ^\\.\\/site.*\\/index\\.json$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./site recursive ^\\.\\/site.*\\/index\\.json$";

/***/ }),

/***/ "./site/pages recursive ^\\.\\/site.*\\/index\\.json$":
false,

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
                var data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = void 0;

                                if (!process.node) {
                                    _context.next = 5;
                                    break;
                                }

                                data = !(function webpackMissingModule() { var e = new Error("Cannot find module \"../..\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                                _context.next = 9;
                                break;

                            case 5:
                                _context.next = 7;
                                return _axios2.default.get(this.get('path') + 'index.json');

                            case 7:
                                data = _context.sent;

                                data = data.data;

                            case 9:
                                console.log(data);

                            case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlIF5cXC5cXC9zaXRlLipcXC9pbmRleFxcLmpzb24kIiwid2VicGFjazovLy8uL3NpdGUvcGFnZXMvZG9jdW1lbnQvaW5kZXguanMiXSwibmFtZXMiOlsidGVtcGxhdGUiLCJkYXRhIiwicHJvY2VzcyIsIm5vZGUiLCJnZXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQSwwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUdLLGlCQUFPQSxRQUFQLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlPQyxvQzs7cUNBQ0FDLFFBQVFDLEk7Ozs7O0FBQ1JGLHVDQUFPLGlJQUFQOzs7Ozs7dUNBRWEsZ0JBQU1HLEdBQU4sQ0FBYSxLQUFLQSxHQUFMLENBQVMsTUFBVCxDQUFiLGdCOzs7QUFBYkgsb0M7O0FBQ0FBLHVDQUFPQSxLQUFLQSxJQUFaOzs7QUFFSkksd0NBQVFDLEdBQVIsQ0FBWUwsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFWR0QsUSIsImZpbGUiOiIwLjg2ZWFlZjA5MWRiMDQ0OTcxNjkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zaXRlIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcL3NpdGUuKlxcXFwvaW5kZXhcXFxcLmpzb24kXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlIF5cXC5cXC9zaXRlLipcXC9pbmRleFxcLmpzb24kXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUgcmVjdXJzaXZlIF5cXC5cXC9zaXRlLipcXC9pbmRleFxcLmpzb24kXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIExheW91dCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBhc3luYyBfaW5pdCgpIHtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgIGlmIChwcm9jZXNzLm5vZGUpIHtcbiAgICAgICAgICAgIGRhdGEgPSByZXF1aXJlKGAuLi8uLi9zaXRlJHt0aGlzLmdldCgncGF0aCcpfS9pbmRleC5qc29uYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGAke3RoaXMuZ2V0KCdwYXRoJyl9aW5kZXguanNvbmApO1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==