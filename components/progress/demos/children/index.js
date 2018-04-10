export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {percent: 40}
    }

    add() {
        if (this.get('percent') >= 100) return;

        this.set('percent', this.get('percent') + 10);
    }

    minus() {
        if (this.get('percent') <= 0) return;

        this.set('percent', this.get('percent') - 10);
    }
}