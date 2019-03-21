export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: ['2', '2-1'],
        };
    }

    _onDragEnd(data) {
        console.log(data);
    }

    _allowDrag(node) {
        return node.key !== '1-1-1';
    }

    _allowDrop(node) {
        return node.key !== '1-1-1';
    }

    _onDenyDrag(node) {
        Message.error(node.data.label);
    }

    _onDenyDrop(node) {
        Message.error(node.data.label);
    }
}