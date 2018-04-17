import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import Column from './column';
import {_$} from '../utils';
import {scrollbarWidth} from '../moveWrapper/position';

const MIN_WIDTH = 40;
const slice = Array.prototype.slice;


export default class Table extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            data: [],
            scheme: {},
            checkType: 'checkbox', // radio | none 
            rowKey(value, index) { return index; },
            rowClassName(value, index) {  }, // add className for tr
            checkedKeys: [], // for checkbox
            checkedKey: undefined, // for radio
            rowCheckable: true, // click row to check
            rowExpandable: true, // click row to expand
            noDataTemplate: _$('/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~'),
            disableRow(data, index) { return false },
            sort: {},
            group: {},
            resizable: false,
            expand: undefined, // expand template callback
            expandedKeys: [], 
            type: 'default', // default border
            fixHeader: false,

            _padding: 0,
            _disabledAmount: 0,
        }
    }

    static propTypes = {
        rowCheckable: Boolean,
        rowExpandable: Boolean,
        resizable: Boolean,
        fixHeader: Boolean,
    }

    _init() {
        // keep the event consistent
        this.on('$change:checkedKeys', (c, newValue, oldValue) => {
            this.trigger('$change:checked', c, newValue, oldValue);
        });
        this.on('$change:checkedKey', (c, newValue, oldValue) => {
            this.trigger('$change:checked', c, [newValue], [oldValue]);
        });
        // calculate padding of header when some props have changed
        ['data', 'fixHeader'].forEach(item => {
            this.on(`$changed:${item}`, this._calcHeaderPadding);
        });
        // update disabled amount when some props have changed
        ['data', 'disableRow'].forEach(item => {
            this.on(`$change:${item}`, this._updateDisabledAmount);
        });
        this._updateDisabledAmount();

        this._move = this._move.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _mount() {
        this._calcHeaderPadding();
    }

    isCheckAll() {
        const checkedKeys = this.get('checkedKeys');
        const dataLength = this.get('data').length;
        const disabledAmount = this.get("_disabledAmount");
        const amount = dataLength - disabledAmount;
        return amount && checkedKeys.length >= amount; 
    }

    isChecked(key) {
        const {checkType, checkedKey, checkedKeys} = this.get();
        if (checkType === 'checkbox') {
            return ~checkedKeys.indexOf(key);
        } else if (checkType === 'radio') {
            return checkedKey === key;
        }
        return false
    }

    checkAll() {
        const rowKey = this.get('rowKey');
        const disableRow = this.get('disableRow');
        const checkedKeys = [];
        this.get('data').forEach((value, index) => {
            if (!disableRow.call(this, value, index)) {
                checkedKeys.push(rowKey.call(this, value, index));
            }
        });
        this.set('checkedKeys', checkedKeys);
    }

    uncheckAll() {
        this.set('checkedKeys', []);
    }

    checkRow(key) {
        this._checkUncheckRow(key, true, false);
    }

    uncheckRow(key) {
        this._checkUncheckRow(key, false, false);
    }

    shrinkRow(key) {
        this._expandShrinkRow(key, false, false);
    }

    expandRow(key) {
        this._expandShrinkRow(key, true, false);
    }

    /**
     * @brief get the checked data
     * @return {Array}
     */
    getCheckedData() {
        const rowKey = this.get('rowKey');
        const checkType = this.get('checkType');
        if (checkType === 'checkbox') {
            const checkedKeys = this.get('checkedKeys');
            const checkedKeysMap = {};
            checkedKeys.forEach((item) => {
                checkedKeysMap[item] = true;
            });
            return this.get('data').filter((value, index) => {
                const key = rowKey.call(this, value, index);
                return checkedKeysMap[key];
            });
        } else if (checkType === 'radio') {
            const checkedKey = this.get('checkedKey');
            return this.get('data').filter((value, index) => {
                return rowKey.call(this, value, index) === checkedKey;
            });
        } else {
            return [];
        }
    }

    _calcHeaderPadding() {
        if (this.get('fixHeader')) {
            const tableHeight = this.table.offsetHeight;
            const containerHeight = this.scroll.offsetHeight;
            const headerHeight = this.header.offsetHeight;
            this.set('_padding', tableHeight - headerHeight > containerHeight ? scrollbarWidth() : 0);
        }
    }

    _updateDisabledAmount() {
        let disabledAmount = 0;
        let {data, disableRow} = this.get();

        if (!Array.isArray(data)) {
            data = [];
            this.set('data', data, {silent: true});
        }

        data.forEach((item, index) => {
            if (disableRow.call(this, item, index)) {
                disabledAmount++;
            }
        });
        this.set('_disabledAmount', disabledAmount);
    }

    _toggleCheckAll(e) {
        if (e.target.checked) {
            this.checkAll();
        } else {
            this.uncheckAll();
        }
    }

    _clickRow(value, index, key, e) {
        // if is from checkbox or radio then do nothing
        if (e.target.tagName.toLowerCase() === 'input') return;
        if (this.get('disableRow').call(this, value, index)) return;

        if (this.get('rowCheckable')) {
            this._checkUncheckRow(key);
        }

        if (this.get('rowExpandable')) {
            this._expandShrinkRow(key); 
        }
    }

    _checkUncheckRow(key, isCheck = false, isToggle = true) {
        const checkType = this.get('checkType');
        if (checkType === 'checkbox') {
            const checkedKeys = this.get('checkedKeys').slice(0);
            const i = checkedKeys.indexOf(key);
            if ((!isCheck || isToggle) && i > -1) {
                checkedKeys.splice(i, 1);
                this.set('checkedKeys', checkedKeys);
            } else if (isCheck || isToggle) {
                checkedKeys.push(key);
                this.set('checkedKeys', checkedKeys);
            }
        } else if (checkType === 'radio') {
            if (!isToggle) {
                // isToggle is false means call this by checkRow & uncheckRow
                if (isCheck) {
                    this.set('checkedKey', key);
                } else {
                    this.set('checkedKey', undefined);
                }
            } else {
                this.set('checkedKey', key);
            }
        }
    }

    _expandShrinkRow(key, isExpand = false, isToggle = true) {
        if (typeof this.get('expand') !== 'function') return;

        const expandedKeys = this.get('expandedKeys').slice(0);
        const i = expandedKeys.indexOf(key);
        if ((!isExpand || isToggle) && i > -1) {
            expandedKeys.splice(i, 1);
            this.set('expandedKeys', expandedKeys);
        } else if (isExpand || isToggle) {
            expandedKeys.push(key);
            this.set('expandedKeys', expandedKeys);
        }
    }

    _onRowDestroyed(key) {
        this.shrinkRow(key); 
        this.uncheckRow(key);
    }

    _sort(key, value) {
        const sort = Object.assign({}, this.get('sort'));
        sort.key = key;
        sort.type = sort.type === 'desc' ? 'asc' : 'desc';
        this.set('sort', sort);
    }

    _dragStart(e) {
        // left key
        if (e.which !== 1) return;

        this._resizing = true;
        this._containerWidth = this.element.offsetWidth;
        this._x = e.clientX;

        const currentTh = e.target.parentNode;
        const prevTh = currentTh.previousElementSibling;

        this._currentThs = [currentTh];
        this._prevThs = [prevTh];
        this._tables = [this.table];

        if (this.get('fixHeader')) {
            const ths = this.table.children[0].getElementsByTagName('th');
            const fixThs = currentTh.parentNode.children;
            const index = slice.call(fixThs).indexOf(currentTh);
            this._currentThs.push(ths[index]);
            this._prevThs.push(ths[index - 1]);
            // this._tables.push(this.header.children[0]);
            // if fixHeader we should change the width of header and scroll
            this._tables = [this.header, this.scroll];
        }

        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
    }

    _move(e) {
        if (this._resizing) {
            const delX = e.clientX - this._x;
            const prevWidth = this._prevThs[0].offsetWidth + delX;
            const tableWidth = this._tables[0].offsetWidth + delX;
            
            if (prevWidth < MIN_WIDTH) return;

            this._prevThs.forEach(item => {
                item.style.width = prevWidth + 'px';
            });

            if (this._containerWidth >= tableWidth) {
                this._tables.forEach(item => {
                    item.style.width = '100%';
                });
            } else {
                this._tables.forEach(item => {
                    item.style.width = tableWidth + 'px';
                });
            }

            this._x = e.clientX;
        }
    }

    _dragEnd(e) {
        if (this._resizing) {
            this._resizing = false;
            document.removeEventListener('mousemove', this._move);
            document.removeEventListener('mouseup', this._dragEnd);
        }
    }

    _destroy() {
        this._dragEnd();
    }
}

export {Table, Column as TableColumn};
