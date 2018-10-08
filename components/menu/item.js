import Intact from 'intact';
import template from './item.vdt';

export default class MenuItem extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        key: {
            type: String,
            required: true,
        },
        disabled: Boolean,
    };

    defaults() {
        return {
            key: undefined,
            disabled: false,

            _root: undefined,
        };
    }

    _onClick(hasSubMenu, e) {
        if (this.get('disabled')) return;

        const root = this.get('_root');
        if (hasSubMenu) {
            root.toggleExpand(this.get('key'));
        } else {
            root.select(this.get('key'));
        }

        this.trigger('click', e);
    }
}
