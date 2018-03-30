import Intact from 'intact';
import template from './index.vdt';
import Step from './step';
import '../../styles/kpc.styl';
import './index.styl';

export default class Steps extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: undefined,
            status: 'normal',
        };
    }
}

export {Steps, Step};

