import template from './row.vdt';

const PROPS = [
    'value', 'index', 'key', 'checkType', 'onlyRight', 'onlyLeft',
    'disabled', 'merge', 'level', 'indent', 'children', 'className',
    'onClick', 'onDestroy', 'onRowEnter', 'onRowLeave', 'onToggleSpreadRow',
    'onChangeChecked', 'checked',
    // to make scheme compare at last
    'scheme'
];

export default class TableRow extends Intact {
    @Intact.template()
    static template = template;

    _onClick(e) {
        const {onClick, value, index, key} = this.get();
        onClick(value, index, key, e);
    }

    _onMouseEnter(e) {
        const {onRowEnter, index} = this.get();
        onRowEnter(index, e);
    }

    _onMouseLeave(e) {
        this.get('onRowLeave')(e);
    }

    _onToggleSpreadRow(e) {
        const {onToggleSpreadRow, key} = this.get();
        onToggleSpreadRow(key, e);
    }

    _onChangeChecked(c, v) {
        // const {onChangeChecked, key} = this.get();
        // onChangeChecked(key, v);
    }

    _destroy() {
        const {onDestroy, key} = this.get();
        onDestroy(key);
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
