export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: ['2', '2-1'],
            show: false,
            event: null,
            node: null,
        };
    }

    _showMenu(node, e) {
        e.preventDefault();
        this.set({
            show: true, 
            event: e,
            node: node,
        });
    }

    _appendNode() {
        this.get('node').append({
            label: 'Appended node',
        });
    }

    _removeNode() {
        this.get('node').remove();
    }
}