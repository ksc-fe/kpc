import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Tag extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            type: 'default',
            closable: false,
            closed: false,
            disabled: false,
        };
    }

    static propTypes = {
        type: ['default', 'primary', 'danger', 'success', 'warning'],
        closable: Boolean,
        closed: Boolean,
        disabled: Boolean,
    }

    _close() {
        this.set('closed', true);
        this.trigger('close');
    }
}

export {Tag};
