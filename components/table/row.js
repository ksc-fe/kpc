import Intact from 'intact';
import template from './row.vdt';

// for tr $destroyed event
export default class TableRow extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: undefined,
            index: undefined,
            key: undefined,
            checkType: undefined,
            onlyRight: undefined,
            disabled: undefined,

            onClick: undefined,
            onDestroy: undefined,
            onRowEnter: undefined,
            onRowLeave: undefined,
        }
    }

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

    _destroy() {
        const {onDestroy, key} = this.get();
        onDestroy(key);
    }

    // update() {
        // return this.element;
    // }
}
