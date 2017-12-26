import template from './index.vdt';
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
        // Message[type](type);
        Message.notice(new Message({content: 'test'}));
    }

    showStickMessage() {
        Message.error('stick error message', 0);
    }

    showTemplate(template) {
        Message.info(template, 0);
    }

    onClick() {
        console.log('click');
    }
}
