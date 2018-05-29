import Intact from 'intact';
import template from './tab.vdt';

export default class Tab extends Intact {
    @Intact.template()
    get template() { return template; }

    static propTypes = {
        disabled: Boolean,
    };

    defaults() {
        return {
            value: undefined,
            to: undefined,
            disabled: false,

            // passed by parent
            _value: undefined,
            _parent: undefined,
        }
    }

    _isActive() {
        const value = this.get('value');
        return value !== undefined && value === this.get('_value');
    }

    _changeTab(e) {
        if (this.get('disabled')) {
            return e.preventDefault();
        }

        this.get('_parent')._changeTab(this.get());
    }
}
