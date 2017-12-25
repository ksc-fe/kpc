import template from './index.vdt';
import Message from 'components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    showMessage() {
        Message.notice('aaaa sdjfls 撒大家分类及士大夫');
    }
}
