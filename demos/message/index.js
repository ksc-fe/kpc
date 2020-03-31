import template from './index.vdt';
import Intact from 'intact';
import Message from 'components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            percent: 40
        }
    }

    showMessage(type) {
        Message[type](type);
    }

    showStickMessage() {
        Message.error('stick error message', 0);
    }

    onClick() {
        console.log('click');
        this.set('percent', this.get('percent') + 5)
        if (this.get('percent') === 100) {
            this.set('show', false);
        }
    }
}
