import Intact from 'intact';
import template from './item.vdt';

export default class CollapseItem extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        disabled: Boolean,
    };

    defaults() {
        return {
            value: undefined,
            title: undefined,
            disabled: false,
        };
    }

    _toggle() {
        if (this.get('disabled')) return;

        this.get('_parent')._changeValue(this.get('value'));
    }

    _enterStart(el) {
        el.style.height = el.children[0].clientHeight + 'px'; 
    }

    _leaveStart(el) {
        el.style.height = el.children[0].clientHeight + 'px'; 
    }

    _enterEnd(el) {
        el.style.height = '';
    }

    _onShow() {
        this.trigger('show', this);
    }

    _onHide() {
        this.trigger('hide', this);
    }
}
