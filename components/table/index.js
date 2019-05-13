import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import Column from './column';
import {_$, throttle, browser} from '../utils';
import {scrollbarWidth} from '../moveWrapper/position';
import ResizeObserver from 'resize-observer-polyfill'; 

const slice = Array.prototype.slice;
const each = Intact.utils.each;

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
            stickScrollbar: false,
            loading: false,
            container: undefined,
            stripe: false,
            rowSelectable: false,
            selectedKeys: [],

            _padding: 0,
            _paddingBottom: 0,
            _isShowLeftRightMiddle: false,
            _disabledAmount: 0,
            _isSticky: false,
            _leftWidth: 0,
            _rightWidth: 0,
            _scrollBarWidth: 0,
            _scrollTop: 0,
            _scrollLeft: 0,
            _scrollPosition: 'left',
            _hoverIndex: undefined,
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
        noDataTemplate: [String, Intact.VNode, Object],
        disableRow: Function,
        sort: Object,
        group: Object,
        resizable: Boolean,
        expandedKeys: Array,
        type: ['default', 'border', 'grid'],
        fixHeader: [Boolean, String, Number],
        minColWidth: Number,
        stickHeader: [Boolean, String, Number],
        loading: Boolean,
        container: [Function, String],
        stripe: Boolean,
        rowSelectable: [Boolean, 'single', 'multiple'],
        selectedKeys: Array,
    };

    static events = {
        'click:row': true,
    };

    _init() {
        // save the width of header cell
        this.headerWidthMap = {};
        this.tableWidth = undefined;
        this.scrollLeft = 0;

        if (browser.isIE) {
            this._setStickyHeaderStyle = throttle(this._setStickyHeaderStyle, 100);
            this._setStickScrollbarStyle = throttle(this._setStickScrollbarStyle, 100);
        }
        
        // keep the event consistent
        this.on('$change:checkedKeys', (c, newValue, oldValue) => {
            this.trigger('$change:checked', c, newValue, oldValue);
        });
        this.on('$change:checkedKey', (c, newValue, oldValue) => {
            this.trigger('$change:checked', c, [newValue], [oldValue]);
        });
        // use ResizeObserver instead of
        // calculate padding of header when some props have changed
        // ['data', 'fixHeader'].forEach(item => {
            // this.on(`$changed:${item}`, this._calcHeaderPadding);
        // });
        // update disabled amount when some props have changed
        ['data', 'disableRow'].forEach(item => {
            this.on(`$change:${item}`, this._updateDisabledAmount);
        });
        ['fixHeader', 'scheme', 'children'].forEach(item => {
            this.on(`$changed:${item}`, this._setFixedColumnWidth);
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
        this.on('$changed:_isStickyScrollbar', (c, v) => {
            if (v) {
                this._onStickyScrollbarMount();
            } else {
                this._onStickyScrollbarUnmount();
            }
        });
        this.on('$receive:stickScrollbar', (c, v) => {
            this.set('_isStickyScrollbar', v != null && v !== false);
        });
        this._updateDisabledAmount();
    }

    _mount() {
        this.set('_scrollBarWidth', scrollbarWidth(), {silent: true});

        this._calcHeaderPadding();
        window.addEventListener('resize', this._onWindowResize);

        this._setFixedColumnWidth();

        if (this.get('_isSticky')) {
            this._onStickyHeaderMount();
        }

        if (this.get('_isStickyScrollbar')) {
            this._onStickyScrollbarMount();
        }

        const ro = this.ro = new ResizeObserver(() => {
            this._calcHeaderPadding();
        });
        ro.observe(this.element);
    }

    _onStickyHeaderMount() {
        this._setStickyHeaderStyle();
        window.addEventListener('scroll', this._setStickyHeaderStyle);
    }

    _onStickyHeaderUnmount() {
        window.removeEventListener('scroll', this._setStickyHeaderStyle);
    }

    _onStickyScrollbarMount() {
        this._setStickScrollbarStyle();
        window.addEventListener('scroll', this._setStickScrollbarStyle);
    }

    _onStickyScrollbarUnmount() {
        window.removeEventListener('scroll', this._setStickScrollbarStyle);
    }

    get(key, defaultValue) {
        if (key === 'data' && !Array.isArray(super.get('data', defaultValue))) {
            return [];
        }
        return super.get(key, defaultValue);
    }

    refreshHeader() {
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

    isSelected(key) {
        const {rowSelectable, selectedKeys} = this.get();
        if (rowSelectable) {
            return ~selectedKeys.indexOf(key);
        }
        return false;
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

    selectRow(key) {
        this._selectUnselectRow(key, true, false);
    }

    unselectRow(key) {
        this._selectUnselectRow(key, false, false);
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

    getSelectedData() {
        const {rowKey, rowSelectable, selectedKeys} = this.get();
        if (rowSelectable) {
            const map = {};
            selectedKeys.forEach(key => map[key] = true);
            return this.get('data').filter((value, index) => {
                return map[rowKey.call(this, value, index)];
            });
        }
        return [];
    }

    async exportTable(data, filename = 'table') {
        let instance = this;
        if (data) {
            instance = new Table({...this.get(), data});
            instance.init(null, this.vNode);
        }

        let download = await import('downloadjs');
        // in webpack 4, we need to access the default property to get the value of module.exports
        if (download.default) {
            download = download.default;
        }
        const collection = [];
        const ignoreCheck = instance.get('checkType') !== 'none';
        const push = (item) => {
            // ignore non-element node
            if (item.nodeType !== 1) return;
            // ignore expand row
            if (item.className === 'k-expand') return;

            const row = [];
            const children = item.children;
            const length = children.length;
            for (let i = 0; i < length; i++) {
                // ignore check column
                if (ignoreCheck && i === 0) continue;
                const child = children[i];
                // ignore the ignored column
                if (child.dataset.ignore !== undefined) continue;

                let text;
                // find the firstChild's dataset.text as text
                let firstChild = child.firstChild;
                while (firstChild) {
                    if (firstChild.nodeType === 1) break;
                    firstChild = firstChild.nextSibling;
                }
                if (firstChild) {
                    text = child.firstChild.dataset.text;
                }
                if (!text) {
                    text = child.textContent.trim();
                }
                row.push(this._escapeCSV(text));
            }
            collection.push(row.join(','));
        };
        instance.header.querySelectorAll('tr').forEach(push);
        // ignore nested table
        each(instance.table.children[1].children, push);
        const content = collection.join('\r\n');
        download(
            '\uFEFF' + content,
            filename + '.csv', 
            'text/comma-separated-values;charset=utf-8'
        );

        if (data) {
            instance.destroy();
        }

        return content;
    }

    _escapeCSV(str) {
        return '"' + String(str).replace(/"/g, '""') + '"';
    }

    _calcHeaderPadding() {
        if (this.get('fixHeader')) {
            const tableHeight = this.table.offsetHeight;
            const containerHeight = this.scroll.offsetHeight;
            this.set('_padding', tableHeight > containerHeight ? this.get('_scrollBarWidth') : 0);
        }
    }

    _setStickyHeaderStyle() {
        let stickHeader = this.get('stickHeader');
        if (stickHeader === true) {
            stickHeader = 0;
        }

        const {top, bottom} = this.element.getBoundingClientRect();
        if (top <= +stickHeader && bottom > +stickHeader) {
            const containerWidth = this.element.offsetWidth;
            const headerHeight = this.header.offsetHeight;
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
                '_sticky': undefined, 
                '_headerHeight': 0,
            });
        }
    }

    _setStickScrollbarStyle() {
        let stickScrollbar = this.get('stickScrollbar');
        if (stickScrollbar === true) {
            stickScrollbar = 0;
        }
        const {top, bottom} = this.element.getBoundingClientRect();
        const viewportHeight = document.documentElement.clientHeight; 
        const p = viewportHeight - stickScrollbar;
        if (bottom >= p && top < p) {
            // we must set the scrollLeft when it has sticked
            // because it is hidden before
            this.refs.scrollbar.scrollLeft = this.get('_scrollLeft');
            const containerWidth = this.element.offsetWidth;
            this.set({
                '_stickyScrollbarStyle': {
                    'width': containerWidth + 'px',
                    'position': 'fixed',
                    'bottom': `${stickScrollbar}px`,
                },
            });
        } else {
            this.set({
                '_stickyScrollbarStyle': {
                    'display': 'none',
                },
            });
        }
    }

    _onScrollbarScroll(e) {
        const target = e.target;
        this.set('_scrollLeft', target.scrollLeft);
    }

    _setFixedColumnWidth() {
        const hasFixed = this.hasFixedLeft || this.hasFixedRight;

        // when stick scrollbar, we also update the _tableWidth
        if (hasFixed || this.get('_isStickyScrollbar')) {
            const data = {};
            const tableWidth = this.table.offsetWidth;
            // update table width firstly
            this.set('_tableWidth', tableWidth);

            if (hasFixed) {
                const type = this.get('type');
                let borderWidth = 0;
                if (type === 'border' || type === 'grid') {
                    borderWidth = 1;
                }
                if (this.hasFixedLeft) {
                    const width = this.leftColumns.reduce((memo, elem) => {
                        return memo + elem.offsetWidth + borderWidth;
                    }, 0);
                    data._leftWidth = width;
                } 

                if (this.hasFixedRight) {
                    const width = this.rightColumns.reduce((memo, elem) => {
                        return memo + elem.offsetWidth + borderWidth;
                    }, 0);
                    data._rightWidth = width + this.get('_padding');
                }

                // calculate the horizontal scroll bar
                let paddingBottom = 0;
                let isShowLeftRightMiddle = false;
                if (this.element.offsetWidth < tableWidth + this.get('_padding')) {
                    paddingBottom = this.get('_scrollBarWidth');
                    isShowLeftRightMiddle = true;
                }
                data._paddingBottom = paddingBottom;
                data._isShowLeftRightMiddle = isShowLeftRightMiddle;

                this.set(data);
            }
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

        if (this.get('rowSelectable')) {
            this._selectUnselectRow(key);
        }

        this.trigger('click:row', value, index, key, e);
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

    _selectUnselectRow(key, isSelect = false, isToggle = true) {
        const selectedKeys = this.get('selectedKeys').slice(0);
        const rowSelectable = this.get('rowSelectable');
        const i = selectedKeys.indexOf(key);
        if (rowSelectable === 'multiple') {
            if ((!isSelect || isToggle) && i > -1) {
                selectedKeys.splice(i, 1);
                this.set({selectedKeys});
            } else if (isSelect || isToggle) {
                selectedKeys.push(key);
                this.set({selectedKeys});
            }
        } else if (rowSelectable) {
            if ((!isSelect || isToggle) && i > -1) {
                this.set('selectedKeys', []);
            } else if (isSelect || isToggle) {
                this.set('selectedKeys', [key]);
            }
        }
    }

    _onRowDestroyed(key) {
        this.shrinkRow(key); 
        this.uncheckRow(key);
        this.unselectRow(key);
    }

    _sort(key, value) {
        const sort = Object.assign({}, this.get('sort'));
        sort.key = key;
        sort.type = sort.type === 'desc' ? 'asc' : 'desc';
        this.set('sort', sort);
    }

    _dragStart(vNode, e) {
        // left mouse key
        if (e.which !== 1) return;

        this._resizing = true;
        this._containerWidth = this.element.offsetWidth;
        this._x = e.clientX;

        const prevVNode = vNode.props.prevVNode;
        const prevProps = prevVNode.props;
        this._minWidth = prevProps.minWidth || this.get('minColWidth');
        const prevTh = prevVNode.dom;
        const currentTh = vNode.dom;

        this._currentTh = currentTh;
        this._prevTh = prevTh;
        this._currentVNode = vNode;
        this._prevVNode = prevVNode;

        this._isLastTh = !currentTh.nextElementSibling;

        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
    }

    _move(e) {
        e.preventDefault();

        this._dragged = true;

        if (this._resizing) {
            const delX = e.clientX - this._x;
            if (delX === 0) return;

            const prevWidth = this._prevTh.offsetWidth + delX;
            const currentWidth = this._currentTh.offsetWidth - delX;
            const tableWidth = this.table.offsetWidth + delX;
            const _padding = this.get('_padding');

            if (prevWidth < this._minWidth && delX < 0) return;

            const currentKey = this._currentVNode.key;
            const prevKey = this._prevVNode.key;

            this.headerWidthMap[prevKey] = prevWidth;

            this._x = e.clientX;

            if (this._containerWidth > tableWidth + _padding) {
                if (this._isLastTh) {
                    this.headerWidthMap[currentKey] = 'auto';
                } else {
                    this.headerWidthMap[currentKey] = currentWidth;
                }
            } else if (this._containerWidth === tableWidth + _padding) {
                this.tableWidth = '100%';
            } else {
                this.tableWidth = tableWidth + 'px';
            }

            this.update();

            // should update fixed column table's width
            this._setFixedColumnWidth();
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
        // this._resizeTableWhenDragable();

        // reset the sticky header's width
        // maybe the top of table has changed too
        if (this.get('_isSticky')) {
            this._setStickyHeaderStyle();
        }
        if (this.get('_isStickyScrollbar')) {
            this._setStickScrollbarStyle();
        }
        this._setFixedColumnWidth();
    }

    // _resizeTableWhenDragable() {
        // if (!this._dragged) return;

        // this._containerWidth = this.element.offsetWidth;
        // this._tables = [this.table];
        // if (this.get('fixHeader')) {
            // this._tables = [this.header, this.scroll];
        // } 

        // const tableWidth = this._tables[0].offsetWidth;
        // if (this._containerWidth > tableWidth) {
            // this._tables.forEach(table => {
                // table.style.width = '100%';
            // });
        // }
    // }

    _getHeaderWidth(key) {
        const width = this.headerWidthMap[key];
        if (width === 'auto') return width;
        if (width) return width + 'px';
    }

    _onTBodyScroll(e) {
        const target = e.target;
        if (target === this.scroll) {
            const oldScrollLeft = this.scrollLeft;
            const newScrollLeft = target.scrollLeft;
            if (newScrollLeft !== oldScrollLeft) {
                // this.header.scrollLeft = newScrollLeft;
                this.scrollLeft = newScrollLeft;
                const maxScroll = target.scrollWidth - target.offsetWidth; 
                this.set({
                    '_scrollLeft': newScrollLeft,
                    '_scrollPosition': newScrollLeft === 0 ? 
                        'left' : 
                        newScrollLeft >= maxScroll ? 
                            'right' : 'middle',
                });
            } else {
                this.set('_scrollTop', target.scrollTop);
            }
        } else {
            this.set('_scrollTop', target.scrollTop);
        }
    }

    _destroy() {
        this._dragEnd();
        window.removeEventListener('resize', this._onWindowResize);
        window.removeEventListener('scroll', this._setStickyHeaderStyle);
        if (this.get('_isSticky')) {
            this._onStickyHeaderUnmount();
        }
        if (this.get('_isStickyScrollbar')) {
            this._onStickyScrollbarUnmount();
        }
        if (this.ro) {
            this.ro.disconnect();
        }
    }
}

export {Table, Column as TableColumn};
