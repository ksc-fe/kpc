import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.match";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js/instance/trim";
import { _$, isNumber } from '../utils';

function decimalPlaces(num) {
  var match = ("" + num).match(/(?:\.(\d+))?$/);
  /* istanbul ignore if */

  if (!match) {
    return 0;
  } // Number of digits right of decimal point.


  return match[1] ? match[1].length : 0;
}

export var methods = {
  required: function required(value) {
    if (value == null) return false;

    if (typeof value === 'string') {
      return _trimInstanceProperty(value).call(value).length > 0;
    }

    if (_Array$isArray(value)) {
      return value.length > 0;
    }

    return true;
  },
  digits: function digits(value) {
    return /^\d+$/.test(value);
  },
  email: function email(value) {
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
  },
  url: function url(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  },
  date: function date(value) {
    return !/Invalid|NaN/.test(new Date(value).toString());
  },
  dateISO: function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  },
  number: function number(value) {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
  },
  minLength: function minLength(value, item, param) {
    if (isNumber(value)) value = String(value);
    return value.length >= Number(param);
  },
  maxLength: function maxLength(value, item, param) {
    if (isNumber(value)) value = String(value);
    return value.length <= Number(param);
  },
  rangeLength: function rangeLength(value, item, param) {
    if (isNumber(value)) value = String(value);
    var length = value.length;
    return length >= Number(param[0]) && length <= Number(param[1]);
  },
  min: function min(value, item, param) {
    return Number(value) >= Number(param);
  },
  max: function max(value, item, param) {
    return Number(value) <= Number(param);
  },
  range: function range(value, item, param) {
    return Number(value) >= Number(param[0]) && Number(value) <= Number(param[1]);
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
      var _context;

      item._equalToCallback = function () {
        item.validateIfDirty();
      };

      equalItem.on('$changed:value', item._equalToCallback);
      equalItem._hasBindEqualToCallback = true; // remove listener when destroy or change rules

      _forEachInstanceProperty(_context = ['$destroyed'
      /*, '$change:rules'*/
      ]).call(_context, function (name) {
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
  return num; // return num === 2 ? _$('两') : num;
}

export var messages = {
  required: function required() {
    return _$('必须填写');
  },
  digits: function digits() {
    return _$('请输入数字');
  },
  email: function email() {
    return _$('请输入正确的邮箱地址');
  },
  url: function url() {
    return _$('请输入正确的网址');
  },
  date: function date() {
    return _$('请输入正确的日期');
  },
  dateISO: function dateISO() {
    return _$('请输入正确的日期 (YYYY-MM-DD)');
  },
  number: function number() {
    return _$('请输入正确的数');
  },
  maxLength: function maxLength(value, item, param) {
    if (_Array$isArray(value)) {
      return _$("\u6700\u591A\u9009\u62E9 {n} \u9879", {
        n: count(param)
      });
    } else {
      return _$("\u6700\u591A\u8F93\u5165 {n} \u4E2A\u5B57\u7B26", {
        n: count(param)
      });
    }
  },
  minLength: function minLength(value, item, param) {
    if (_Array$isArray(value)) {
      return _$("\u6700\u5C11\u9009\u62E9 {n} \u9879", {
        n: count(param)
      });
    } else {
      return _$("\u6700\u5C11\u8F93\u5165 {n} \u4E2A\u5B57\u7B26", {
        n: count(param)
      });
    }
  },
  rangeLength: function rangeLength(value, item, param) {
    if (_Array$isArray(value)) {
      return _$("\u8BF7\u9009\u62E9 {n} \u5230 {m} \u9879", {
        n: count(param[0]),
        m: count(param[1])
      });
    } else {
      return _$("\u8BF7\u8F93\u5165 {n} \u5230 {m} \u4E2A\u5B57\u7B26", {
        n: count(param[0]),
        m: count(param[1])
      });
    }
  },
  max: function max(value, item, param) {
    return _$("\u8BF7\u8F93\u5165\u4E0D\u5927\u4E8E {n} \u7684\u6570", {
      n: param
    });
  },
  min: function min(value, item, param) {
    return _$("\u8BF7\u8F93\u5165\u4E0D\u5C0F\u4E8E {n} \u7684\u6570", {
      n: param
    });
  },
  range: function range(value, item, param) {
    return _$("\u8BF7\u8F93\u5165 {n[0]} \u5230 {n[1]} \u4E4B\u95F4\u7684\u6570", {
      n: param
    });
  },
  step: function step(value, item, param) {
    return _$("\u8BF7\u8F93\u5165\u6B65\u957F\u4E3A {n} \u7684\u6570", {
      n: param
    });
  },
  equalTo: function equalTo() {
    return _$('两次输入不一致');
  }
};
export var classNames = {};
export var addMethod = function addMethod(name, method, message, className) {
  methods[name] = method;
  messages[name] = message !== undefined ? message : messages[name];
  classNames[name] = className;
};