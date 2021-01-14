import "core-js/modules/es.array.join";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _construct from "@babel/runtime-corejs3/helpers/construct";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";

var _context;

import dayjs from 'dayjs';
import { strPad, range, _$ } from '../utils';
export function getNowDate() {
  // only date without time
  var now = new Date();
  now.setHours(0);
  now.setMinutes(0);
  now.setSeconds(0);
  now.setMilliseconds(0);
  return dayjs(now);
}
export function isEqual(a, b) {
  if (a && b) {
    return a.isSame(b, 'date');
  }

  return false;
}
export function isLT(a, b) {
  if (a && b) {
    return a.isBefore(b, 'date');
  }

  return false;
}
export function isGT(a, b) {
  return isLT(b, a);
}
export function getDateString(date, type) {
  var year = date.getFullYear();

  if (type === 'year') {
    return year;
  }

  var month = year + "-" + strPad(date.getMonth() + 1, 2);

  if (type === 'month') {
    return month;
  }

  var _date = month + "-" + strPad(date.getDate(), 2);

  if (type !== 'datetime') {
    return _date;
  }

  return _date + " " + getTimeString(date);
}
export function getTimeString(date) {
  return [strPad(date.getHours(), 2), strPad(date.getMinutes(), 2), strPad(date.getSeconds(), 2)].join(':');
}
export function dispatchEvent(target, eventName, options) {
  var event;

  if (document.createEvent) {
    event = document.createEvent('Event');
    event.initEvent(eventName, true, true);
  } else if (document.createEventObject) {
    event = document.createEventObject();
    return target.fireEvent("on" + eventName, event);
  } else if (typeof CustomEvent !== 'undefined') {
    event = new CustomEvent(eventName);
  }

  _Object$assign(event, options);

  target.dispatchEvent(event);
}
export function createDate(date) {
  if (typeof date === 'string') {
    var _date$split = date.split(' '),
        dateString = _date$split[0],
        timeString = _date$split[1];

    var args = dateString.split('-');
    args[1] = args[1] - 1;

    if (timeString) {
      args.push.apply(args, timeString.split(':'));
    }

    return _construct(Date, args);
  }

  if (!date) return new Date();
  return new Date(date);
}
export var monthArray = _mapInstanceProperty(_context = range(0, 11)).call(_context, function (i) {
  return {
    label: _$(i + 1 + "\u6708"),
    value: i
  };
});
export var yearArray = function yearArray(value) {
  return range(value - 5, value + 5);
};
export var FORMATS = {
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  year: 'YYYY',
  month: 'YYYY-MM'
};