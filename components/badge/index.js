import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Badge extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            disabled: false,
            text: undefined,
            max: undefined,
        };
    }
}

export {Badge};
