import Intact from 'intact';
import template from './step.vdt';

export default class Step extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        done: Boolean,
        selected: Boolean,
        error: Boolean,
    };

    defaults() {
        return {
            title: undefined,
            done: false,
            selected: false,
            error: false,
            index: undefined,
        }
    }
}
