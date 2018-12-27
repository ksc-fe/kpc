export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {value: ['$0']};
    }

    onShow(c) {
        console.log('show');
    }
}