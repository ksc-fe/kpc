import "core-js/modules/es.array.iterator";
import "core-js/modules/es.function.name";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/es.string.split";
import "core-js/modules/web.dom-collections.iterator";
import "core-js/modules/web.url";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
import _URL from "@babel/runtime-corejs3/core-js/url";
import _Array$from from "@babel/runtime-corejs3/core-js/array/from";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime-corejs3/helpers/asyncToGenerator";
import _lastIndexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/last-index-of";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js/instance/trim";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './index.vdt';
import '../../styles/kpc.css';
import './index.css';
import { request } from './ajaxUploader';
import { isFunction, _$ } from '../utils';
var index = 0;
var Upload = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Upload, _Intact);

  var _super = _createSuper(Upload);

  function Upload() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Upload.prototype;

  _proto.defaults = function defaults() {
    return {
      accept: undefined,
      multiple: false,
      type: 'select',
      // select | drag | gallery
      files: [],
      autoUpload: true,
      disabled: false,
      action: '',
      name: undefined,
      headers: undefined,
      data: undefined,
      withCredentials: false,
      limit: undefined,
      maxSize: undefined,
      defaultFiles: undefined,
      directory: false,
      beforeUpload: function beforeUpload() {
        return true;
      },
      beforeRemove: function beforeRemove() {
        return true;
      },
      _dragOver: false,
      _showImage: false
    };
  };

  _proto._init = function _init() {
    var _context;

    this._counter = 0;

    var _this$get = this.get(),
        files = _this$get.files,
        defaultFiles = _this$get.defaultFiles;

    var _files = _sliceInstanceProperty(_context = files || []).call(_context, 0);

    if (defaultFiles) {
      _forEachInstanceProperty(defaultFiles).call(defaultFiles, function (file) {
        var obj = {
          status: 'done',
          name: file.name,
          percent: 100,
          uid: index++,
          raw: file,
          url: file.url
        };

        _files.push(obj);
      });

      this.set('files', _files);
    }

    this.on('$receive:accept', this._parseAccept);
  };

  _proto._parseAccept = function _parseAccept(c, v) {
    var _this = this;

    this.extensions = [];
    this.mimeTypes = [];
    this.groupTypes = [];

    if (v) {
      var _context2;

      _forEachInstanceProperty(_context2 = v.split(',')).call(_context2, function (item) {
        item = _trimInstanceProperty(item).call(item).toLowerCase();

        if (item[0] === '.') {
          _this.extensions.push(item.substring(1));
        } else {
          var _item$split = item.split('/'),
              type = _item$split[0],
              extension = _item$split[1];

          if (extension === '*') {
            _this.groupTypes.push(type);
          } else {
            _this.mimeTypes.push(item);
          }
        }
      });
    }
  };

  _proto._isValidType = function _isValidType(value, name) {
    var _context3, _context4, _context5;

    if (_findInstanceProperty(_context3 = this.mimeTypes).call(_context3, function (item) {
      return item === value;
    })) return true;
    var type = value.split('/')[0];

    var index = _lastIndexOfInstanceProperty(name).call(name, '.');

    var extension;

    if (index > -1) {
      extension = name.substring(index + 1).toLowerCase();
    }

    return _findInstanceProperty(_context4 = this.extensions).call(_context4, function (item) {
      return item === extension;
    }) || _findInstanceProperty(_context5 = this.groupTypes).call(_context5, function (item) {
      return item === type;
    });
  };

  _proto.submit = function submit() {
    var _context6,
        _this2 = this;

    _forEachInstanceProperty(_context6 = this.get('files')).call(_context6, function (file) {
      if (file.status === 'notReady') {
        _this2._upload(file);
      }
    });
  };

  _proto._selectFile = function _selectFile() {
    /* istanbul ignore if */
    if (!this.get('disabled')) {
      var input = this.refs.input;
      input.value = '';
      input.click();
    }
  };

  _proto._onInputChange = function _onInputChange(e) {
    this._addFiles(e.target.files);
  };

  _proto._addFiles = /*#__PURE__*/function () {
    var _addFiles2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(fileList) {
      var _context7;

      var files, _files, _this$get2, maxSize, limit, autoUpload, accept, error, status, i, file, _error, _error2, obj;

      return _regeneratorRuntime.wrap(function _callee$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              files = _sliceInstanceProperty(_context7 = this.get('files')).call(_context7, 0);
              _files = _Array$from(fileList);
              _this$get2 = this.get(), maxSize = _this$get2.maxSize, limit = _this$get2.limit, autoUpload = _this$get2.autoUpload, accept = _this$get2.accept;

              if (!(limit && files.length + _files.length > limit)) {
                _context8.next = 6;
                break;
              }

              error = new Error(_$('超出文件数量最大限制：{limit}', {
                limit: limit
              }));
              return _context8.abrupt("return", this.trigger('error', error, _files, files));

            case 6:
              status = autoUpload ? 'ready' : 'notReady';
              i = 0;

            case 8:
              if (!(i < _files.length)) {
                _context8.next = 30;
                break;
              }

              file = _files[i];

              if (!(maxSize && file.size > maxSize * 1024)) {
                _context8.next = 14;
                break;
              }

              _error = new Error(_$('"{name}" 超出文件最大限制：{maxSize}kb', {
                name: file.name,
                maxSize: maxSize
              }));
              this.trigger('error', _error, file, files);
              return _context8.abrupt("continue", 27);

            case 14:
              if (!(accept && file.type && !this._isValidType(file.type, file.name))) {
                _context8.next = 18;
                break;
              }

              _error2 = new Error(_$('"{name}" 文件类型不合法', {
                name: file.name
              }));
              this.trigger('error', _error2, file, files);
              return _context8.abrupt("continue", 27);

            case 18:
              obj = {
                status: status,
                name: file.name,
                type: file.type,
                size: file.size,
                percent: 0,
                uid: index++,
                raw: file
              };

              if (_URL && _URL.createObjectURL) {
                obj.url = _URL.createObjectURL(file);
              }

              _context8.t0 = !autoUpload;

              if (_context8.t0) {
                _context8.next = 25;
                break;
              }

              _context8.next = 24;
              return this._upload(obj);

            case 24:
              _context8.t0 = _context8.sent;

            case 25:
              if (!_context8.t0) {
                _context8.next = 27;
                break;
              }

              files.push(obj);

            case 27:
              i++;
              _context8.next = 8;
              break;

            case 30:
              this.set('files', files);

            case 31:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee, this);
    }));

    function _addFiles(_x) {
      return _addFiles2.apply(this, arguments);
    }

    return _addFiles;
  }();

  _proto._onDrop = function _onDrop(e) {
    this._preventDefault(e);

    this._counter = 0;

    if (!this.get('disabled')) {
      this.set('_dragOver', false);

      this._addFiles(e._rawEvent.dataTransfer.files);
    }
  };

  _proto._onDragEnter = function _onDragEnter(e) {
    e.preventDefault();
    this._counter++;
    if (this.get('_dragOver') || this.get('disabled')) return;
    this.set('_dragOver', true);
  };

  _proto._onDragLeave = function _onDragLeave(e) {
    this._counter--;

    if (!this._counter) {
      this.set('_dragOver', false);
    }
  };

  _proto._preventDefault = function _preventDefault(e) {
    e.stopPropagation();
    e.preventDefault();
  };

  _proto._upload = /*#__PURE__*/function () {
    var _upload2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(file) {
      var _Object$assign2,
          _this3 = this;

      var beforeUpload, ret, _context9, files, _index, data, options;

      return _regeneratorRuntime.wrap(function _callee2$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              beforeUpload = this.get('beforeUpload');
              _context10.prev = 1;
              _context10.next = 4;
              return beforeUpload.call(this, file, this.get('files'));

            case 4:
              ret = _context10.sent;
              _context10.next = 9;
              break;

            case 7:
              _context10.prev = 7;
              _context10.t0 = _context10["catch"](1);

            case 9:
              if (ret) {
                _context10.next = 14;
                break;
              }

              files = _sliceInstanceProperty(_context9 = this.get('files')).call(_context9, 0);
              _index = _indexOfInstanceProperty(files).call(files, file);

              if (_index > -1) {
                _spliceInstanceProperty(files).call(files, _index, 1);

                this.set({
                  files: files
                });
              }

              return _context10.abrupt("return", false);

            case 14:
              data = this.get('data');
              options = {
                action: this.get('action'),
                headers: this.get('headers'),
                data: _Object$assign((_Object$assign2 = {}, _Object$assign2[this.get('name') || file.name] = file.raw, _Object$assign2), isFunction(data) ? data.call(this, file) : data || {}),
                onProgress: function onProgress(e) {
                  _this3._onProgress(e, file);
                },
                onError: function onError(e) {
                  _this3._onError(e, file);
                },
                onSuccess: function onSuccess(res) {
                  _this3._onSuccess(res, file);
                },
                withCredentials: this.get('withCredentials')
              };
              file.request = request(options);
              return _context10.abrupt("return", true);

            case 18:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee2, this, [[1, 7]]);
    }));

    function _upload(_x2) {
      return _upload2.apply(this, arguments);
    }

    return _upload;
  }();

  _proto._onProgress = function _onProgress(e, file) {
    file.status = 'uploading';
    file.percent = e.percent;
    this.update();
    this.trigger('progress', e, file, this.get('files'));
  };

  _proto._onError = function _onError(e, file) {
    file.status = 'error';
    this.update();
    this.trigger('error', e, file, this.get('files'));
  };

  _proto._onSuccess = function _onSuccess(res, file) {
    file.status = 'done';
    this.update();
    this.trigger('success', res, file, this.get('files'));
  };

  _proto._removeFile = /*#__PURE__*/function () {
    var _removeFile2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(file, index, e) {
      var _context11;

      var beforeRemove, files, ret;
      return _regeneratorRuntime.wrap(function _callee3$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.stopPropagation();
              beforeRemove = this.get('beforeRemove');
              files = _sliceInstanceProperty(_context11 = this.get('files')).call(_context11, 0);
              _context12.prev = 3;
              _context12.next = 6;
              return beforeRemove.call(this, file, files);

            case 6:
              ret = _context12.sent;
              _context12.next = 11;
              break;

            case 9:
              _context12.prev = 9;
              _context12.t0 = _context12["catch"](3);

            case 11:
              if (ret) {
                _spliceInstanceProperty(files).call(files, index, 1);

                if (file.status === 'uploading') {
                  file.request.abort();
                }

                this.set('files', files);
              }

            case 12:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee3, this, [[3, 9]]);
    }));

    function _removeFile(_x3, _x4, _x5) {
      return _removeFile2.apply(this, arguments);
    }

    return _removeFile;
  }();

  _proto._showImage = function _showImage(file) {
    this.set({
      '_showImage': true,
      '_showedFile': file
    });
  };

  return Upload;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "request", request), _defineProperty(_class2, "blocks", ['content', 'tip']), _defineProperty(_class2, "propTypes", {
  accept: String,
  multiple: Boolean,
  type: ['select', 'drag', 'gallery'],
  files: Array,
  autoUpload: Boolean,
  disabled: Boolean,
  action: String,
  name: String,
  headers: Object,
  data: Object,
  withCredentials: Boolean,
  limit: Number,
  maxSize: Number,
  defaultFiles: Array,
  beforeUpload: Function,
  beforeRemove: Function,
  directory: Boolean
}), _defineProperty(_class2, "events", {
  error: true,
  progress: true,
  success: true
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Upload as default };
export { Upload };