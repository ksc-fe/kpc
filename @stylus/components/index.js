'use strict';

exports.__esModule = true;
exports.version = exports.Transfer = exports.Tooltip = exports.Tab = exports.Tabs = exports.TableColumn = exports.Table = exports.Switch = exports.Step = exports.Steps = exports.Spinner = exports.Slider = exports.OptionGroup = exports.Option = exports.Select = exports.ScrollSelect = exports.Radio = exports.Progress = exports.Pagination = exports.MoveWrapper = exports.Message = exports.Link = exports.Input = exports.Col = exports.Row = exports.FormItem = exports.Form = exports.Editable = exports.DropdownItem = exports.DropdownMenu = exports.Dropdown = exports.Dialog = exports.Datepicker = exports.Checkbox = exports.ButtonGroup = exports.Button = exports.BreadcrumbItem = exports.Breadcrumb = exports.App = undefined;
exports.install = install;

var _app = require('./app');

var _breadcrumb = require('./breadcrumb');

var _button = require('./button');

var _checkbox = require('./checkbox');

var _datepicker = require('./datepicker');

var _dialog = require('./dialog');

var _dropdown = require('./dropdown');

var _editable = require('./editable');

var _form = require('./form');

var _grid = require('./grid');

var _input = require('./input');

var _link = require('./link');

var _message = require('./message');

var _moveWrapper = require('./moveWrapper');

var _pagination = require('./pagination');

var _progress = require('./progress');

var _radio = require('./radio');

var _scrollSelect = require('./scrollSelect');

var _select = require('./select');

var _slider = require('./slider');

var _spinner = require('./spinner');

var _steps = require('./steps');

var _switch = require('./switch');

var _table = require('./table');

var _tabs = require('./tabs');

var _tooltip = require('./tooltip');

var _transfer = require('./transfer');

exports.App = _app.App;
exports.Breadcrumb = _breadcrumb.Breadcrumb;
exports.BreadcrumbItem = _breadcrumb.BreadcrumbItem;
exports.Button = _button.Button;
exports.ButtonGroup = _button.ButtonGroup;
exports.Checkbox = _checkbox.Checkbox;
exports.Datepicker = _datepicker.Datepicker;
exports.Dialog = _dialog.Dialog;
exports.Dropdown = _dropdown.Dropdown;
exports.DropdownMenu = _dropdown.DropdownMenu;
exports.DropdownItem = _dropdown.DropdownItem;
exports.Editable = _editable.Editable;
exports.Form = _form.Form;
exports.FormItem = _form.FormItem;
exports.Row = _grid.Row;
exports.Col = _grid.Col;
exports.Input = _input.Input;
exports.Link = _link.Link;
exports.Message = _message.Message;
exports.MoveWrapper = _moveWrapper.MoveWrapper;
exports.Pagination = _pagination.Pagination;
exports.Progress = _progress.Progress;
exports.Radio = _radio.Radio;
exports.ScrollSelect = _scrollSelect.ScrollSelect;
exports.Select = _select.Select;
exports.Option = _select.Option;
exports.OptionGroup = _select.OptionGroup;
exports.Slider = _slider.Slider;
exports.Spinner = _spinner.Spinner;
exports.Steps = _steps.Steps;
exports.Step = _steps.Step;
exports.Switch = _switch.Switch;
exports.Table = _table.Table;
exports.TableColumn = _table.TableColumn;
exports.Tabs = _tabs.Tabs;
exports.Tab = _tabs.Tab;
exports.Tooltip = _tooltip.Tooltip;
exports.Transfer = _transfer.Transfer; /* generate start */

var version = exports.version = '4.0.0';

/* generate end */

function install(Vue) {
    if (install.installed) return;

    if (Vue) {
        for (var key in exports) {
            var code = key.charCodeAt(0);
            // the key which the first char is uppercase is a component
            if (code >= 65 && code <= 90) {
                Vue.component(key, exports[key]);
            }
        }
    } else {
        for (var _key in exports) {
            var _code = _key.charCodeAt(0);
            // the key which the first char is uppercase is a component
            if (_code >= 65 && _code <= 90) {
                global['K' + _key] = exports[_key];
            }
        }
    }
}