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
        };
    }

    _close() {
        this.set('closed', true);
        this.trigger('close');
    }
}

export {Tag};
