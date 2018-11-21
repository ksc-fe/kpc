export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: ['3'],
            selectedKey: '3-1',
        };
    }

    onSelect(item) {
        console.log('key', item.get('key'));
    }
}