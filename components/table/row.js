import Intact from 'intact';
import template from './row.vdt';

const PROPS = [
    'value', 'index', 'rowKey', 'checkType', 'onlyRight', 'onlyLeft',
    'disabled', 'merge', 'level', 'indent', 'children', 'className',
    'checked', 'draggable', 'dragKey', 'rowKeys', 'rowCheckeds', 'rowDisableds',
    // to make scheme compare at last
    'scheme', 
];

const {isEqual} = Intact.utils;

export default class TableRow extends Intact {
    @Intact.template()
    static template = template;

    _onClick(e) {
        const {onClick, value, index, rowKey, checkType, rowDisableds, onChangeChecked, 'ev-click': click} = this.get();
        const {spanIndexs, spanRowKeys} = this._getSpanColumnsInfoByIndex();
        const isCheckedFirstColumn = checkType === 'checkbox' && e.target.dataset.column === 'k-first-column';

        if(!((checkType === 'radio' || isCheckedFirstColumn) && Array.isArray(spanIndexs)) )  {
            onClick(value, index, rowKey, e);
        }else {
            if( spanIndexs.every(idx => rowDisableds[idx]) ) return;

            const enabledSpanRowKeys = spanRowKeys.filter((key,index) => rowDisableds[spanIndexs[index]] === false);
            onClick(value, index, rowKey, e, enabledSpanRowKeys);
            if(isCheckedFirstColumn && this._isHalfChecked()) onChangeChecked(enabledSpanRowKeys, true);
        }
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
        const {onChangeChecked, checkType, rowDisableds} = this.get();
        
        // 由”全选“状态 变成 ”半选“状态
        if(checkType === 'checkbox' && !v && this._isHalfChecked()) return onChangeChecked(undefined, v);

        const {spanIndexs, spanRowKeys} = this._getSpanColumnsInfoByIndex();
        if(Array.isArray(spanIndexs)){
            const enabledSpanRowKeys = spanRowKeys.filter((key,index) => rowDisableds[spanIndexs[index]] === false);
            return onChangeChecked(enabledSpanRowKeys, v);
        }
        onChangeChecked(spanRowKeys, v);
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
                    key === 'scheme'?
                        !isSameScheme(lastProps.scheme, nextProps.scheme) : ( 
                            key === 'rowKeys' || key === 'rowDisableds' || key === 'rowCheckeds'? 
                                !isEqual(lastProps[key], nextProps[key]) :
                                lastProps[key] !== nextProps[key]
                        )
                ) {
                    isSame = false;
                    break;
                }
            }
            if (isSame) {
                // add last rowInGrid in grid
                const {merge, grid, firstCloumnRowSpans} = nextProps;
                if (merge) {
                    grid.push(this.rowInGrid);
                    firstCloumnRowSpans.push(this.spanColumnsInfo)
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
        const spanColumnsInfo = this._getSpanColumnsInfoByIndex();
        if(!spanColumnsInfo) return;

        const {spanIndexs} = spanColumnsInfo;
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

    _getSpanColumnsInfoByIndex(){
        const {checkType, rowKey, index, merge, firstCloumnRowSpans} = this.get();
        return checkType === 'none' || !merge ? {spanRowKeys: rowKey, spanIndexs: index} : firstCloumnRowSpans[index];
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
