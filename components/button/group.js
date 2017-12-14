import Intact from 'intact';
import template from './group.vdt';
import './index.styl';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            vertical: false,
            radio: false,
            value: undefined,
        };
    }

    static propTypes = {
        vertical: Boolean,
        radio: Boolean,
    }
}

