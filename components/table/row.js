import Intact from 'intact';
import template from './row.vdt';

const PROPS = [
    'value', 'index', 'rowKey', 'checkType', 'onlyRight', 'onlyLeft',
    'disabled', 'merge', 'level', 'indent', 'children', 'className',
    'checked', 'draggable', 'dragKey',
    // to make scheme compare at last
    'scheme'
];

export default class TableRow extends Intact {
    @Intact.template()
    static template = template;

    _onClick(e) {
        const {onClick, value, index, rowKey, 'ev-click': click} = this.get();
        onClick(value, index, rowKey, e);
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
        const {onChangeChecked, rowKey} = this.get();
        onChangeChecked(rowKey, v);
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
