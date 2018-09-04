import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import Column from './column';
import {_$} from '../utils';
import {scrollbarWidth} from '../moveWrapper/position';

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
            expandedKeys: [], 
            type: 'default', // default border
            fixHeader: false,
            minColWidth: 40,
            stickHeader: false,

            _padding: 0,
            _disabledAmount: 0,
            _isSticky: false,
        }
    }

    static propTypes = {
        data: Array,
        scheme: Object,
        checkType: ['checkbox', 'radio', 'none'],
        rowKey: Function,
        rowClassName: Function,
        checkedKeys: Array,
        checkedKey: [String, Number],
        rowCheckable: Boolean,
        rowExpandable: Boolean,
        noDataTemplate: [String, Intact.VNode],
        disableRow: Function,
        sort: Object,
        group: Object,
        resizable: Boolean,
        expandedKeys: Array,
        type: ['default', 'border'],
        fixHeader: [Boolean, String, Number],
        minColWidth: Number,
        stickHeader: [Boolean, String, Number],
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
        this.on('$changed:_isSticky', (c, v) => {
            if (v) {
                this._onStickyHeaderMount();
            } else {
                this._onStickyHeaderUnmount();
            }
        });
        this.on('$receive:stickHeader', (c, v) => {
            this.set('_isSticky', v != null && v !== false);
        });
        this.on('$changed:_sticky', (c, v) => {
            if (v.position === 'fixed') {
                this.header.scrollLeft = this.element.scrollLeft;
            }
        });
        this._updateDisabledAmount();

        this._move = this._move.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _mount() {
        this._calcHeaderPadding();
        window.addEventListener('resize', this._onWindowResize);

        if (this.get('_isSticky')) {
            this._onStickyHeaderMount();
        }
    }

    _onStickyHeaderMount() {
        this._setStickyHeaderStyle();
        window.addEventListener('scroll', this._setStickyHeaderStyle);
        // when dragable we must scroll sticky header when table scrolled
        const elem = this.element;
        const header = this.header;
        this._elementScrollCallback = (e) => {
            if (this.get('_sticky.position') === 'fixed') {
                header.scrollLeft = elem.scrollLeft;
            }
        };
        elem.addEventListener('scroll', this._elementScrollCallback);
    }

    _onStickyHeaderUnmount() {
        window.removeEventListener('scroll', this._setStickyHeaderStyle);
        this.element.removeEventListener('scroll', this._elementScrollCallback);
    }

    get(key, defaultValue) {
        if (key === 'data' && !Array.isArray(super.get('data', defaultValue))) {
            return [];
        }
        return super.get(key, defaultValue);
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

    _setStickyHeaderStyle() {
        let stickHeader = this.get('stickHeader');
        const tableWidth = this.table.offsetWidth;
        const headerHeight = this.header.offsetHeight;
        if (stickHeader === true) {
            stickHeader = 0;
        }
        const top = this.table.getBoundingClientRect().top;
        if (top <= +stickHeader) {
            const containerWidth = this.element.offsetWidth;
            this.set({
                '_sticky': {
                    'width': containerWidth + 'px',
                    'position': 'fixed',
                    'top': `${stickHeader}px`,
                },
                '_headerHeight': `${headerHeight}px`,
            });
        } else {
            this.set({
                '_sticky': {
                    width: tableWidth + 'px',
                },
                '_headerHeight': 0,
            });
        }
    }

    _updateDisabledAmount() {
        let disabledAmount = 0;
        const data = this.get('data');
        const disableRow = this.get('disableRow');

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
        // in chrome of macos, the target is input's parent element
        // maybe beacause input's opacity is 0
        const children = e.target.children;
        if (children[0] && children[0].tagName.toLowerCase() === 'input') return;
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
                } else if (this.get('checkedKey') === key) {
                    // only change it when we uncheck the checked row
                    this.set('checkedKey', undefined);
                }
            } else {
                this.set('checkedKey', key);
            }
        }
    }

    _expandShrinkRow(key, isExpand = false, isToggle = true) {
        if (!this.get('_blocks.expand')) return;

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

    _dragStart(props, e) {
        // left key
        if (e.which !== 1) return;

        this._resizing = true;
        this._containerWidth = this.element.offsetWidth;
        this._x = e.clientX;

        this._minWidth = props.minWidth || this.get('minColWidth');

        const currentTh = e.target.parentNode;
        const prevTh = currentTh.previousElementSibling;

        this._currentThs = [currentTh];
        this._prevThs = [prevTh];
        this._tables = [this.table];
        this._isLastTh = !currentTh.nextElementSibling;

        const {fixHeader, _isSticky} = this.get();
        if (fixHeader || _isSticky) {
            const ths = this.table.children[0].getElementsByTagName('th');
            const fixThs = currentTh.parentNode.children;
            const index = slice.call(fixThs).indexOf(currentTh);
            this._currentThs.push(ths[index]);
            this._prevThs.push(ths[index - 1]);
            // this._tables.push(this.header.children[0]);
            // if fixHeader we should change the width of both header and scroll
            if (fixHeader) {
                this._tables = [this.header, this.scroll];
            } else if (this.get('_sticky.position') === 'fixed') {
                // if stickHeader set width of the table in header
                // to make the sticky header don't expand
                this._tables = [this.headerTable, this.scroll];
            } else {
                this._tables = [this.header, this.headerTable, this.scroll];
            }
        }

        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
    }

    _move(e) {
        e.preventDefault();

        this._dragged = true;

        if (this._resizing) {
            const delX = e.clientX - this._x;
            if (delX === 0) return;

            const prevWidth = this._prevThs[0].offsetWidth + delX;
            const tableWidth = this._tables[0].offsetWidth + delX;
            const currentWidth = this._currentThs[0].offsetWidth - delX;
            
            if (prevWidth < this._minWidth && delX < 0) return;

            this._prevThs.forEach(item => {
                item.style.width = prevWidth + 'px';
            });

            if (this._containerWidth > tableWidth) {
                this._currentThs.forEach(item => {
                    if (this._isLastTh) {
                        item.width = '';
                        item.style.width = '';
                    } else {
                        item.style.width = currentWidth + 'px'; 
                    }
                });
            } else if (this._containerWidth === tableWidth) {
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

    _onWindowResize() {
        this._resizeTableWhenDragable();

        // reset the sticky header's width
        // maybe the top of table has changed too
        if (this.get('_isSticky')) {
            this._setStickyHeaderStyle();
        }
    }

    _resizeTableWhenDragable() {
        if (!this._dragged) return;

        this._containerWidth = this.element.offsetWidth;
        this._tables = [this.table];
        if (this.get('fixHeader')) {
            this._tables = [this.header, this.scroll];
        } 

        const tableWidth = this._tables[0].offsetWidth;
        if (this._containerWidth > tableWidth) {
            this._tables.forEach(table => {
                table.style.width = '100%';
            });
        }
    }

    _destroy() {
        this._dragEnd();
        window.removeEventListener('resize', this._onWindowResize);
        window.removeEventListener('scroll', this._setStickyHeaderStyle);
        if (this.get('_isSticky')) {
            this._onStickyHeaderUnmount();
        }
    }
}

export {Table, Column as TableColumn};
