import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

const colors = ['default', 'primary', 'warning', 'danger', 'success'];

export default class Icon extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        size: ['large', 'default', 'small', 'mini', String, Number],
        color: String,
    }

    defaults() {
        this.colors = colors;
        return {
            size: 'default',
            color: undefined,
        };
    }
}

export {Icon};
