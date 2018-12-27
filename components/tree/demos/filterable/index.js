export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: ['2', '2-1'],
        };
    }

    _filter(data) {
        const keywords = this.get('keywords');
        if (!keywords) return true;
        return data.label.includes(keywords);
    }
}