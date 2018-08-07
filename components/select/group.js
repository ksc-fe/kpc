import Intact from 'intact';
import template from './group.vdt';

export default class OptionGroup extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        label: [String, Number, Intact.VNode],
    }

    defaults() {
        return {
            label: '',

            _card: false,
        }
    }
}
