'use strict';

exports.__esModule = true;
function decimalPlaces(num) {
    var match = ("" + num).match(/(?:\.(\d+))?$/);
    if (!match) {
        return 0;
    }

    // Number of digits right of decimal point.
    return match[1] ? match[1].length : 0;
}

var methods = exports.methods = {
    required: function required(value) {
        return value != null && (typeof value === 'string' || Array.isArray(value) ? value.length > 0 : true);
    },
    digits: function digits(value) {
        return (/^\d+$/.test(value)
        );
    },
    email: function email(value) {
        return (/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
        );
    },
    url: function url(value) {
        return (/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value)
        );
    },
    date: function date(value) {
        return !/Invalid|NaN/.test(new Date(value).toString());
    },
    dateISO: function dateISO(value) {
        return (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
        );
    },
    number: function number(value) {
        return (/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
        );
    },
    minLength: function minLength(value, item, param) {
        return value.length >= param;
    },
    maxLength: function maxLength(value, item, param) {
        return value.length <= param;
    },
    rangeLength: function rangeLength(value, item, param) {
        var length = value.length;
        return length >= param[0] && length <= param[1];
    },
    min: function min(value, item, param) {
        return value >= param;
    },
    max: function max(value, item, param) {
        return value <= param;
    },
    range: function range(value, item, param) {
        return value >= param[0] && value <= param[1];
    },
    step: function step(value, item, param) {
        var decimals = decimalPlaces(param);
        var toInt = function toInt(num) {
            return Math.round(num * Math.pow(10, decimals));
        };

        return decimalPlaces(value) <= decimals && toInt(value) % toInt(param) === 0;
    },
    equalTo: function equalTo(value, item, param) {
        var equalValue = item.form.get('_context').data.get(param);
        var equalItem = item.form.getItem(param);
        if (!equalItem._hasBindEqualToCallback) {
            item._equalToCallback = function () {
                item.validateIfDirty();
            };
            equalItem.on('$changed:value', item._equalToCallback);
            equalItem._hasBindEqualToCallback = true;

            // remove listener when destroy or change rules
            ['$destroyed' /*, '$change:rules'*/].forEach(function (name) {
                item.on(name, function () {
                    equalItem.off('$changed:value', item._equalToCallback);
                    equalItem._hasBindEqualToCallback = false;
                });
            });
        }

        return value === equalValue;
    }
};

function count(num) {
    return num === 2 ? '两' : num;
}

var messages = exports.messages = {
    required: '必须填写',
    digits: '请输入数字',
    email: '请输入正确的邮箱地址',
    url: '请输入正确的网址',
    date: '请输入正确的日期',
    dateISO: '请输入正确的日期 (YYYY-MM-DD)',
    number: '请输入正确的数',
    maxLength: function maxLength(value, item, param) {
        if (Array.isArray(value)) {
            return '\u6700\u591A\u9009\u62E9' + count(param) + '\u9879';
        } else {
            return '\u6700\u591A\u8F93\u5165' + count(param) + '\u4E2A\u5B57\u7B26';
        }
    },
    minLength: function minLength(value, item, param) {
        if (Array.isArray(value)) {
            return '\u6700\u5C11\u9009\u62E9' + count(param) + '\u9879';
        } else {
            return '\u6700\u5C11\u8F93\u5165' + count(param) + '\u4E2A\u5B57\u7B26';
        }
    },
    rangeLength: function rangeLength(value, item, param) {
        if (Array.isArray(value)) {
            return '\u8BF7\u9009\u62E9' + count(param[0]) + '\u5230' + count(param[1]) + '\u9879';
        } else {
            return '\u8BF7\u8F93\u5165' + count(param[0]) + '\u5230' + count(param[1]) + '\u4E2A\u5B57\u7B26';
        }
    },
    max: function max(value, item, param) {
        return '\u8BF7\u8F93\u5165\u4E0D\u5927\u4E8E' + param + '\u7684\u6570';
    },
    min: function min(value, item, param) {
        return '\u8BF7\u8F93\u5165\u4E0D\u5C0F\u4E8E' + param + '\u7684\u6570';
    },
    range: function range(value, item, param) {
        return '\u8BF7\u8F93\u5165' + param[0] + '\u5230' + param[1] + '\u4E4B\u95F4\u7684\u6570';
    },
    step: function step(value, item, param) {
        return '\u8BF7\u8F93\u5165\u6B65\u957F\u4E3A' + param + '\u7684\u6570';
    },

    equalTo: '两次输入不一致'
};

var classNames = exports.classNames = {};

var addMethod = exports.addMethod = function addMethod(name, method, message, className) {
    methods[name] = method;
    messages[name] = message !== undefined ? message : messages[name];
    classNames[name] = className;
};