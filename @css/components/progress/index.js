'use strict';

exports.__esModule = true;
exports.Progress = exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _index = require('./index.vdt');

var _index2 = _interopRequireDefault(_index);

require('../../styles/kpc.css');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by sylvia on 2017/10/16.
 */
function fixPercent(percent) {
    if (percent > 100) percent = 100;
    if (percent < 0) percent = 0;
    return percent;
}

var Progress = function (_Intact) {
    (0, _inherits3.default)(Progress, _Intact);

    function Progress() {
        (0, _classCallCheck3.default)(this, Progress);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Progress.prototype.defaults = function defaults() {
        return {
            type: 'bar', // bar circle
            percent: 0, // 0~100
            size: 'default', // small mini
            isOuterText: true,
            isInnerText: false, // FIXME: 布尔型取值用is开头 isShowInnerText 见README
            status: 'active', // success | error | active | normal
            strokeWidth: 10
        };
    };

    Progress.prototype._init = function _init() {
        var _this2 = this;

        this._initStatus = this.get('status');

        this.on('$change:percent', function (c, percent) {
            percent = fixPercent(percent);
            var status = percent === 100 ? 'success' : _this2._initStatus;
            _this2.set({
                status: status,
                percent: percent
            });
        });
        this.on('$change:status', function (c, status) {
            if (status !== 'success') _this2._initStatus = status;
        });

        this.set('percent', fixPercent(this.get('percent')));
    };

    (0, _createClass3.default)(Progress, [{
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);
    return Progress;
}(_intact2.default);

exports.default = Progress;
exports.Progress = Progress;