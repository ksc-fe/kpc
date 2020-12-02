import Intact from 'intact';
import template from './row.vdt';

const PROPS = [
    'value', 'index', 'rowKey', 'checkType', 'onlyRight', 'onlyLeft',
    'disabled', 'merge', 'level', 'indent', 'children', 'className',
    'checked', 'draggable', 'dragKey',
    // to make scheme compare at last
    'scheme', 'rowKeys', 'rowCheckeds', 
    'curClickRowKey', 'rowDisableds'
];

export default class TableRow extends Intact {
    @Intact.template()
    static template = template;

    _onClick(e) {
        const {onClick, value, index, rowKey, checkType, 'ev-click': click} = this.get();
        const {spanRowKeys} = this.spanColumnsInfo;
        console.log("click index", index, this.spanColumnsInfo)
        onClick(value, index, rowKey, e, checkType === 'radio' ? spanRowKeys : undefined);
        click && click(e);
    }

    _onMouseEnter(e) {
        const {onRowEnter, index, 'ev-mouseenter': mouseEnter} = this.get();
        onRowEnter(index, e);
        // for Tooltip
        mouseEnter && mouseEnter(e);
    }

    _onMouseLeave(e) {
        const {onRowLeave, 'ev-mouseleave': mouseLeave} = this.get();
        onRowLeave(e);
        mouseLeave && mouseLeave(e);
    }

    _onDragStart(e) {
        const {onRowDragStart} = this.get();
        onRowDragStart(e, this);
    }

    _onDragEnd(e) {
        const {onRowDragEnd} = this.get();
        onRowDragEnd(e, this);
    }

    _onDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        const {onRowDragOver} = this.get();
        onRowDragOver(e, this);
    }

    _onToggleSpreadRow(e) {
        const {onToggleSpreadRow, rowKey} = this.get();
        onToggleSpreadRow(rowKey, e);
    }

    _onChangeChecked(c, v) {
        const {onChangeChecked, rowKey, index, curClickRowKey, checkType} = this.get();
        
        if(checkType === 'radio') return onChangeChecked(rowKey, v);

        // 由”全选“状态 变成 ”半选“状态
        // const isHalfChecked =this._getStatus(false, this._isHalfChecked);
        const isHalfChecked = this._isHalfChecked();
        if(!v && isHalfChecked) return onChangeChecked(curClickRowKey, v);

        const {spanRowKeys} = this._getSpanColumnsInfoByIndex(index);
        onChangeChecked(spanRowKeys, v);
            
    }

    _create() {
        const {index} = this.get();
        this.spanColumnsInfo = this._getSpanColumnsInfoByIndex(index);
    }

    _destroy() {
        const {onDestroy, rowKey} = this.get();
        onDestroy(rowKey);
    }

    update(lastVNode, nextVNode, flag) {
        if (lastVNode && nextVNode) {
            const lastProps = lastVNode.props;
            const nextProps = nextVNode.props;

            let isSame = true;
            for (let i = 0; i < PROPS.length; i++) {
                const key = PROPS[i];
                if (
                    key === 'scheme' ?
                        !isSameScheme(lastProps.scheme, nextProps.scheme) :
                        lastProps[key] !== nextProps[key]
                ) {
                    isSame = false;
                    break;
                }
            }
            if (isSame) {
                // add last rowInGrid in grid
                const {merge, grid} = nextProps;
                if (merge) {
                    grid.push(this.rowInGrid);
                }
                // update events for Tooltip
                this.set(nextProps, {silent: true});
                // this.set({
                    // 'ev-mouseenter': nextProps['ev-mouseenter'],
                    // 'ev-mouseleave': nextProps['ev-mouseleave'],
                    // 'ev-click': nextProps['ev-click'],
                // }, {silent: true})
                return this.element;
            }
        }
        return super.update(lastVNode, nextVNode, flag);
    }

    _getStatus(notSpanReturnVal, spanReturnVal){
        const {rowCheckeds, rowDisableds} = this.get();
        
        if(!this.spanColumnsInfo) return;

        const {spanIndexs} = this.spanColumnsInfo;
        if(!Array.isArray(spanIndexs)) return notSpanReturnVal; // 代表没有合并

        const enabledSpanIndexs = spanIndexs.filter(idx => rowDisableds[idx] === false);
        const checkedEnabledSpanIndexs = enabledSpanIndexs.filter(idx => rowCheckeds[idx] === true);
        return spanReturnVal && spanReturnVal(enabledSpanIndexs, checkedEnabledSpanIndexs); // 有合并的返回值
    }

    // 全选状态
    _isAllChecked(){
        const {checked} = this.get();
        return this._getStatus(checked, (enabledSpanIndexs, checkedEnabledSpanIndexs) => checkedEnabledSpanIndexs.length === enabledSpanIndexs.length)
    }

    // 半选状态
    _isHalfChecked(){
        return this._getStatus(false, (enabledSpanIndexs, checkedEnabledSpanIndexs) => {
            const isHasCheckedRow = checkedEnabledSpanIndexs.length > 0;
            const isCheckedAllSpans = checkedEnabledSpanIndexs.length === enabledSpanIndexs.length;
    
            return isCheckedAllSpans ? false : isHasCheckedRow;
        })
    }
 
    _isDisabled(){
        const {disabled} = this.get();
        return this._getStatus(disabled, (enabledSpanIndexs) => enabledSpanIndexs.length === 0)
    }

    _getSpanColumnsInfoByIndex(index){
        const allSpanColumnsInfo = this._allSpanColumnsInfo();
        return Array.isArray(allSpanColumnsInfo) ? allSpanColumnsInfo[index] : allSpanColumnsInfo;
    }
    // 只针对勾选框列  一个勾选框对应合并几列的数据
    _allSpanColumnsInfo(){
        const {checkType, rowKey, rowKeys, index, grid} = this.get();

        if(checkType === 'none' || grid.length === 0) return {spanRowKeys: rowKey, spanIndexs: index};

        const rowSpans = [];
        let prevRowspan = 1;
        let currentSpanColumnsInfoInCheckedRow = null;

        grid.forEach((rowInGrid, rowIndex) => {
            const firstColumnSpans = rowInGrid[0];
            const firstColumnRowspan = firstColumnSpans.rowspan || 1;
            const endRowIndex = rowIndex + firstColumnRowspan;
            const spanIndexs = [];

            if(firstColumnRowspan > 1 && prevRowspan===1){
                // 合并开始行
                const spanRowKeys = rowKeys.slice(rowIndex, endRowIndex);
                for(let i = rowIndex; i < endRowIndex; i++){
                    spanIndexs.push(i);
                }
                currentSpanColumnsInfoInCheckedRow = {
                    spanRowKeys,
                    spanIndexs
                }
            }else if(firstColumnRowspan === 1 && prevRowspan===1){
                // 不是合并行
                currentSpanColumnsInfoInCheckedRow = {
                    spanRowKeys: rowKey,
                    spanIndexs: rowIndex,
                }
            }
            rowSpans.push(currentSpanColumnsInfoInCheckedRow);
            prevRowspan = firstColumnRowspan;
        })
        return rowSpans;
    }
}

const compareProps = ['template', 'blockFn', 'ignore', 'align', 'className', 'fixed'];

function isSameScheme(schemeA, schemeB) {
    if (schemeA === schemeB) return true;
    if (schemeA && schemeB) {
        const keysA = Object.keys(schemeA);
        const keysB = Object.keys(schemeB);
        let length = keysA.length;
        if (length !== keysB.length) return false;

        while (length--) {
            const key = keysA[length];
            const valueB = schemeB[key];
            if (!valueB) return false;

            const valueA = schemeA[key];
            for (let i = 0; i < compareProps.length; i++) {
                const prop = compareProps[i];
                if (valueA[prop] !== valueB[prop]) {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}
