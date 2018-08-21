import Intact from 'intact';
import template from './index.vdt';
import Step from './step';
import '../../styles/kpc.styl';
import './index.styl';

export default class Steps extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        value: [Number, String],
        status: ['normal', 'error'],
        type: ['default', 'line', 'simple'],
    }

    defaults() {
        return {
            value: undefined,
            status: 'normal',

            type: 'default',
        };
    }
}

export {Steps, Step};

