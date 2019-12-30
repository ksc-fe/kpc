import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import Column from './column';
import {_$, debounce, browser, toggleArray} from '../utils';
import {scrollbarWidth} from '../moveWrapper/position';
import ResizeObserver from 'resize-observer-polyfill'; 
import TooltipContent from '../tooltip/content';

const slice = Array.prototype.slice;
const {each, className} = Intact.Vdt.utils;
const hasLocalStorage = typeof localStorage !== 'undefined';

export default class Table extends Intact {
    @Intact.template()
    get template() { return template; }

    static blocks = ['no-data', 'expand', 'tooltip'];

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
            defaultWidthMap: {},
            defaultWidth: undefined,
            storeWidth: undefined,
            merge: undefined,
            tooltipPosition: 'top',
            childrenKey: 'children',
            indent: 32,
            spreadKeys: [],            

            _padding: 0,
            _paddingBottom: 0,
            _isShowLeftRightMiddle: false,
            _disabledAmount: 0,
            _isSticky: false,
            _leftWidth: 0,
            _rightWidth: 0,
            _scrollBarWidth: 0,
            _scrollPosition: 'left',
            _hoverIndex: undefined,
            _amount: 0,
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
        stickScrollbar: [Boolean, String, Number],
        loading: Boolean,
        container: [Function, String],
        stripe: Boolean,
        rowSelectable: [Boolean, 'single', 'multiple'],
        selectedKeys: Array,
        defaultWidthMap: Object,
        storeWidth: String,
        merge: Function,
        tooltipPosition: TooltipContent.propTypes.position, 
        childrenKey: String,
        indent: Number,
        spreadKeys: Array,
    };

    static events = {
        'click:row': true,
        changeWidth : true,
    };

    _init() {
        this._columns = {};

        // save the width of header cell
        this._initWidth();
        // save the destroyed rows
        this._allDestroyedRows = [];

        this.scrollLeft = 0;

        // keep the event consistent
        this.on('$change:checkedKeys', (c, newValue, oldValue) => {
            this.trigger('$change:checked', c, newValue, oldValue);
        });
        this.on('$change:checkedKey', (c, newValue, oldValue) => {
            this.trigger('$change:checked', c, [newValue], [oldValue]);
        });
        // calculate padding of header when some props have changed
        // #310
        this.on('$changed:data', this._calcHeaderPadding);

        // update disabled amount when some props have changed
        ['data', 'disableRow'].forEach(item => {
            this.on(`$change:${item}`, this._updateDisabledAmount);
        });
        ['fixHeader', 'scheme', 'children'].forEach(item => {
            this.on(`$changed:${item}`, this._setFixedColumnWidth);
        });
        this.on('$receive:stickHeader', (c, v) => {
            this.set('_isSticky', v != null && v !== false);
        });
        this.on('$receive:stickScrollbar', (c, v) => {
            this.set('_isStickyScrollbar', v != null && v !== false);
        });
        this._updateDisabledAmount();
    }

    _initWidth() {
        const {defaultWidthMap, defaultWidth} = this.get();
        this.headerWidthMap = defaultWidthMap || {};
        this.tableWidth = defaultWidth;

        if (this.headerWidthMap && this.tableWidth) return;

        // if exist storeWidth we get the width from localStorage
        const storeWidth = this.get('storeWidth');
        if (storeWidth && hasLocalStorage) {
            let storage = localStorage.getItem(storeWidth);
            if (storage) {
                try {
                    const {map, width} = JSON.parse(storage);
                    if (map && !defaultWidth) {
                        this.headerWidthMap = map;
                    }
                    if (width && !defaultWidth) {
                        this.tableWidth = width; 
                    }
                } catch (e) {  }
            }
        }
    }

    _storeWidth() {
        const storeWidth = this.get('storeWidth');
        if (storeWidth && hasLocalStorage) {
            localStorage.setItem(storeWidth, JSON.stringify({
                map: this.headerWidthMap,
                width: this.tableWidth
            }));
        }

        this.trigger('changeWidth', this.headerWidthMap, this.tableWidth);
    }

    _mount() {
        this.set('_scrollBarWidth', scrollbarWidth(), {silent: true});

        this._calcHeaderPadding();
        this._checkTableWidth(true);
        window.addEventListener('resize', this._onWindowResize);

        this._setFixedColumnWidth();

        // use debounce instead of throttle, because if there is
        // transition on parent container, the width is weired
        // #342
        const ro = this.ro = new ResizeObserver(debounce(() => {
            if (this.destroyed) return;

            this._calcHeaderPadding();
            this._checkTableWidth();
        }, 100));
        ro.observe(this.element);
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
        const dataLength = this.get('_amount');
        const disabledAmount = this.get("_disabledAmount");
        const amount = dataLength - disabledAmount;
        return amount && checkedKeys.length >= amount; 
    }

    isChecked(key) {
        const {checkType, checkedKey, checkedKeys} = this.get();
        if (checkType === 'checkbox') {
            return !!~checkedKeys.indexOf(key);
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

    isSpreaded(key) {
        const {spreadKeys} = this.get();
        return ~spreadKeys.indexOf(key);
    }

    checkAll() {
        // const start = performance.now();

        const rowKey = this.get('rowKey');
        const disableRow = this.get('disableRow');
        const checkedKeys = [];
        this._breakForEach((value, index) => {
            if (!disableRow.call(this, value, index)) {
                checkedKeys.push(rowKey.call(this, value, index));
            }
        });
        this.set('checkedKeys', checkedKeys);

        // console.log('checkAll: ', performance.now() - start);
    }

    uncheckAll() {
        this.set({
            checkedKeys: [],
            checkedKey: undefined,
        });
    }

    checkRow(key) {
        this._checkUncheckRows([key], true, false);
    }

    uncheckRow(key) {
        this._checkUncheckRows([key], false, false);
    }

    uncheckRows(keys) {
        this._checkUncheckRows(keys, false, false);
    }

    shrinkRow(key) {
        this._expandShrinkRows([key], false, false);
    }

    shrinkRows(keys) {
        this._expandShrinkRows(keys, false, false);
    }

    expandRow(key) {
        this._expandShrinkRows([key], true, false);
    }

    selectRow(key) {
        this._selectUnselectRows([key], true, false);
    }

    unselectRow(key) {
        this._selectUnselectRows([key], false, false);
    }

    unselectRows(keys) {
        this._selectUnselectRows(keys, false, false);
    }

    /**
     * @brief get the checked data
     * @return {Array}
     */
    getCheckedData() {
        const rowKey = this.get('rowKey');
        const checkType = this.get('checkType');

        let ret = [];
        if (checkType === 'checkbox') {
            const checkedKeys = this.get('checkedKeys');
            const checkedKeysMap = {};
            checkedKeys.forEach((item) => {
                checkedKeysMap[item] = true;
            });
            this._breakForEach((value, index) => {
                const key = rowKey.call(this, value, index);
                if (checkedKeysMap[key]) {
                    ret.push(value);
                }
            });
        } else if (checkType === 'radio') {
            const checkedKey = this.get('checkedKey');
            this._breakForEach((value, index) => {
                const key = rowKey.call(this, value, index);
                if (key === checkedKey) {
                    ret.push(value);
                    return true;
                }
            });
        }

        return ret;
    }

    getSelectedData() {
        const {rowKey, rowSelectable, selectedKeys} = this.get();
        let ret = [];
        if (rowSelectable) {
            const map = {};
            selectedKeys.forEach(key => map[key] = true);
            this._breakForEach((value, index) => {
                if (map[rowKey.call(this, value, index)]) {
                    ret.push(value);
                }
            });
        }
        return ret;
    }

    async exportTable(data, filename = 'table') {
        let instance = this;
        if (data) {
            instance = new Table({...this.get(), data});
            instance._initMountedQueue();
            instance.init(null, this.vNode);
            instance._triggerMountedQueue();
        }

        // in webpack 1, it doesn't support dynamic import
        // we must handle this file by babel-loader and sepcify plugin `dynamic-webpack-import`
        // #304
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
                if (firstChild && firstChild.tagName === 'INTACT-CONTENT') {
                    // for angular
                    firstChild = firstChild.firstChild;
                }
                while (firstChild) {
                    if (firstChild.nodeType === 1) break;
                    firstChild = firstChild.nextSibling;
                }
                if (firstChild) {
                    text = firstChild.dataset.text;
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

    _breakForEach(cb) {
        const childrenKey = this.get('childrenKey');
        const data = this.get('data');

        if (!childrenKey) {
            return data.find(cb);
        } 

        let index = -1;
        const loop = (data) => {
            data.find(value => {
                index++;
                const ret = cb(value, index);
                if (ret === true) return true;
                if (Array.isArray(value[childrenKey])) {
                    loop(value[childrenKey]);
                }
            });
        };
        loop(data);
    }

    _toggleSpreadRow(key, e) {
        e.stopPropagation();
        const spreadKeys = toggleArray(this.get('spreadKeys'), key);
        this.set({spreadKeys});
    }

    _calcHeaderPadding() {
        if (this.get('fixHeader')) {
            const tableHeight = this.table.offsetHeight;
            const containerHeight = this.scroll.offsetHeight;
            this.set('_padding', tableHeight > containerHeight ? this.get('_scrollBarWidth') : 0);
        }
    }

	_checkTableWidth(isMount) {
        this._checkTableColumnMinWidth();

        if (this.get('resizable')) {
            const tableWidth = this.table.offsetWidth;
            const containerWidth = this.scroll.clientWidth;
            if (tableWidth < containerWidth) {
                // this.tableWidth = containerWidth + 'px';
                this.tableWidth = isMount ? '100%' : containerWidth + 'px';
                this.update();

                this._storeWidth();
            }
        }
    }

    _checkTableColumnMinWidth() {
        // TODO: check width when table expands
        let shouldUpdate = false;
        for (let key in this._columns) {
            const column = this._columns[key];
            const minWidth = column.get('minWidth');
            if (minWidth) {
                const width = column.element.offsetWidth;
                if (width < minWidth) {
                    this.headerWidthMap[key] = minWidth; 
                    shouldUpdate = true;
                }
            }
        }
        if (shouldUpdate) {
            this.update();
            // check again because it may affect other columns
            this._checkTableColumnMinWidth();
        }
    }

    _excludeStickHeader({offsetTop}) {
        const {bottom} = this.element.getBoundingClientRect();
        return bottom <= offsetTop;
    }

    _shouldStickScrollbar({offsetBottom, viewportHeight}) {
        const {top, bottom} = this.element.getBoundingClientRect();
        const p = viewportHeight - offsetBottom;
        if (bottom >= p && top < p) {
            this.set('_stickyScrollbarStyle', undefined); 
            // update scrollLeft, because it can not be updated when it is hidden
            this.refs.scrollbar.scrollLeft = this.scrollLeft;
            return true;
        } else {
            this.set('_stickyScrollbarStyle', {display: 'none'});
            return false;
        }
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
        let amount = 0;
        const disableRow = this.get('disableRow');

        this._breakForEach((item, index) => {
            if (disableRow.call(this, item, index)) {
                disabledAmount++;
            }
            amount++;
        });
        this.set({
            _disabledAmount: disabledAmount,
            _amount: amount,
        });
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
            this._checkUncheckRows([key]);
        }

        if (this.get('rowExpandable')) {
            this._expandShrinkRows([key]); 
        }

        if (this.get('rowSelectable')) {
            this._selectUnselectRows([key]);
        }

        this.trigger('click:row', value, index, key, e);
    }

    _checkUncheckRows(keys, isCheck = false, isToggle = true) {
        const checkType = this.get('checkType');
        if (checkType === 'checkbox') {
            let checkedKeys = this.get('checkedKeys'); // .slice(0);
            let shouldSet = false;
            keys.forEach(key => {
                const i = checkedKeys.indexOf(key);
                if ((!isCheck || isToggle) && i > -1) {
                    if (!shouldSet) checkedKeys = checkedKeys.slice(0);
                    checkedKeys.splice(i, 1);
                    shouldSet = true;
                } else if ((isCheck || isToggle) && i < 0) {
                    if (!shouldSet) checkedKeys = checkedKeys.slice(0);
                    checkedKeys.push(key);
                    shouldSet = true;
                }
            });
            if (shouldSet) {
                this.set('checkedKeys', checkedKeys);
            }
        } else if (checkType === 'radio') {
            const key = keys[0];
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

    _expandShrinkRows(keys, isExpand = false, isToggle = true) {
        if (!this.get('_blocks.expand')) return;

        let expandedKeys = this.get('expandedKeys').slice(0);
        let shouldSet = false;
        keys.forEach(key => {
            const i = expandedKeys.indexOf(key);
            if ((!isExpand || isToggle) && i > -1) {
                expandedKeys.splice(i, 1);
                shouldSet = true;
            } else if (isExpand || isToggle) {
                expandedKeys.push(key);
                shouldSet = true;
            }
        });
        if (shouldSet) {
            this.set('expandedKeys', expandedKeys);
        }
    }

    _selectUnselectRows(keys, isSelect = false, isToggle = true) {
        let selectedKeys = this.get('selectedKeys').slice(0);
        const rowSelectable = this.get('rowSelectable');
        let shouldSet = false;
        keys.forEach(key => {
            const i = selectedKeys.indexOf(key);
            if (rowSelectable === 'multiple') {
                if ((!isSelect || isToggle) && i > -1) {
                    selectedKeys.splice(i, 1);
                    shouldSet = true;
                } else if (isSelect || isToggle) {
                    selectedKeys.push(key);
                    shouldSet = true;
                }
            } else if (rowSelectable) {
                if ((!isSelect || isToggle) && i > -1) {
                    selectedKeys = [];
                    shouldSet = true;
                } else if (isSelect || isToggle) {
                    selectedKeys = [key];
                    shouldSet = true;
                }
            }
        });
        if (shouldSet) {
            this.set({selectedKeys});
        }
    }

    /**
     * //-
     * if update, the Row may be destroyed, and it will update table on each Row destroyed
     * so we collect all the Rows and do it once. #407
     */
    _onRowDestroyed(key) {
        if (this._willDestroy) return;
        this._allDestroyedRows.push(key);
    }

    _update() {
        const keys = this._allDestroyedRows;
        if (keys.length) {
            this.shrinkRows(keys); 
            this.uncheckRows(keys);
            this.unselectRows(keys);

            this._allDestroyedRows = [];
        }
    }
    /* -// */

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
        this._containerWidth = this.scroll.clientWidth; // element.offsetWidth;
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

        // this._isLastTh = !currentTh.nextElementSibling;

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
                // if (this._isLastTh) {
                    // this.headerWidthMap[currentKey] = 'auto';
                // } else {
                    this.headerWidthMap[currentKey] = currentWidth;
                // }
            // } else if (this._containerWidth === tableWidth + _padding) {
                // this.tableWidth = '100%';
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

            this._storeWidth();
        }
    }

    _onWindowResize() {
        // this._resizeTableWhenDragable();

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
        const hasFixed = this.hasFixedLeft || this.hasFixedRight;
        let isScroll;
        let isScrollbar;
        if ((isScroll = target === this.scroll) || (isScrollbar = target === this.refs.scrollbar)) {
            const oldScrollLeft = this.scrollLeft;
            const newScrollLeft = target.scrollLeft;
            if (newScrollLeft !== oldScrollLeft) {
                this.scrollLeft = newScrollLeft;

                // handle the header scrollLeft directly for performace
                this.header.scrollLeft = newScrollLeft;
                if (isScroll) {
                    if (this.refs.scrollbar) {
                        this.refs.scrollbar.scrollLeft = newScrollLeft;
                    }
                } else {
                    this.scroll.scrollLeft = newScrollLeft;
                }

                if (!hasFixed) return;

                const maxScroll = target.scrollWidth - target.offsetWidth; 
                return this.set({
                    '_scrollPosition': newScrollLeft === 0 ? 
                        'left' : 
                        newScrollLeft >= maxScroll ? 
                            'right' : 'middle',
                });
            }
        }

        if (!hasFixed) return;

        const oldScrollTop = this.scrollTop;
        const newScrollTop = target.scrollTop;
        if (oldScrollTop !== newScrollTop) {
            this.scrollTop = newScrollTop;

            const tables = [this.scroll];
            if (this.hasFixedLeft) {
                tables.push(this.leftFixedScroll);
            }
            if (this.hasFixedRight) {
                tables.push(this.rightFixedScroll);
            }
            tables.forEach(table => {
                if (table !== target) {
                    table.scrollTop = newScrollTop;
                }
            });
        }
    }

    /**
     * handle dom directly for performance, #310
     * 
     * @modify
     * We can not handle dom directly, because it may be wrapped with Tooltip
     * and it will modify className when the tip layer shows or hides. This will
     * overwrite the className
     */
    _onRowEnter(index, e) {
        // const start = performance.now();
        this.set('_hoverIndex', index);
        // console.log('hover: ', performance.now() - start);
        // this._hoverIndex = index;
        // addClass(e.target, 'k-hover');
        // const _class = vNode.props.className;
        // const _className = className({
            // [_class]: _class,
            // 'k-hover': true,
        // });
        // vNode.className = _className;
        // vNode.props.className = _className;
        // // if has fixed columns, we must update the view
        // if (this.hasFixedLeft || this.hasFixedRight) {
            // this.update();
        // }
    }

    _onRowLeave(e) {
        this.set('_hoverIndex', undefined);
        // const vNode = e._vNode;
        // this._hoverIndex = undefined;
        // removeClass(e.target, 'k-hover');
        // vNode.className = vNode.props.className = vNode.props.className.replace('k-hover', '');
        // if (this.hasFixedLeft || this.hasFixedRight) {
            // this.update();
        // }
    }

    _onChangeChecked(key, value) {
        this._checkUncheckRows([key], value, false);
    }

    _destroy() {
        this._dragEnd();
        window.removeEventListener('resize', this._onWindowResize);
        if (this.ro) {
            this.ro.disconnect();
        }
    }

    destroy(...args) {
        this._willDestroy = true;
        super.destroy(...args);
    }
}

export {Table, Column as TableColumn};
