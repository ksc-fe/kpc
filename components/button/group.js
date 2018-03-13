import Intact from 'intact';
import template from './group.vdt';
import './index.styl';

export default class ButtonGroup extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            vertical: false,
            value: undefined,
            radio: false, // @deprecated: use checkType instead of
            checkType: 'none', // radio | checkbox | none
        };
    }

    static propTypes = {
        vertical: Boolean,
        radio: Boolean,
    }

    _init() {
        if (this.get('radio')) {
            this.set('checkType', 'radio', {silent: true});
        }
    }
}

