export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            percent: 10, 
            show: false
        };
    }

    add() {
        this.set('percent', this.get('percent') + 5);
    }
}