import template from './index.vdt';
import Intact from 'intact';

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            text: '可编辑文本'
        }
    }
}
