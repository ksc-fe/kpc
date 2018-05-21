import Intact from 'intact';
import template from './column.vdt';

export default class TableColumn extends Intact {
    get template() { return template; }

    static propTypes = {
        sortable: Boolean,
        multiple: Boolean,
    };

    defaults() {
        return {
            title: '',
            template(data, index) { },
            key: '',
            sortable: false,
            width: undefined,
            group: undefined,
            multiple: false,
            value: [],

            // passed by parent
            $parent: undefined,
            _show: false,
        }
    }

    onClick(e) {
        this.trigger('click', e);
    }

    onDragStart(e) {
        this.trigger('dragStart', e);
    }

    _isChecked(v) {
        const {value, multiple} = this.get();
        if (multiple) {
            return !!(value && ~value.indexOf(v));
        }
        return value === v;
    }

    _onSelect(v, c, e) {
        e.preventDefault();
        const {value, multiple} = this.get();

        if (multiple) {
            const tmp  = value ? value.slice(0) : [];
            const index = tmp.indexOf(v);
            if (~index) {
                tmp.splice(index, 1);
            } else {
                tmp.push(v); 
            }
            this.set('value', tmp);
        } else {
            this.set('value', v);
        }
    }

    _onChangeShow(c, v) {
        this.set('_show', v);
    }

    _getGroupText() {
        let {value, multiple, group} = this.get();

        if (value == null) return;

        if (!multiple) {
            value = [value];
        }

        let ret;
        if (group) {
            ret = group.filter(item => ~value.indexOf(item.value))
                .map(item => item.label)
                .join(', ')
            if (ret) {
                return `(${ret})`;
            }
        }
    }

    _stopPropagation(e) {
        e.stopPropagation();
    }
}
