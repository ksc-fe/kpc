import Intact from 'intact';
import template from './column.vdt';

export default class TableColumn extends Intact {
    get template() { return template; }

    defaults() {
        return {
            title: '',
            template(data, index) {},
            key: '',
            sortable: false,
            width: undefined,
            groups: undefined,

            // passed by parent
            $parent: undefined,
        }
    }

    onClick(e) {
        this.trigger('click', e);
    }

    onDragStart(e) {
        this.trigger('dragStart', e);
    }
}
