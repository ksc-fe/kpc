import Intact from 'intact';
import template from './tab.vdt';

export default class Tab extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            value: undefined,
            href: undefined,

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
        this.get('_parent')._changeTab(this.get());
    }
}
