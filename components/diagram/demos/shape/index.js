export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            states: {
                selectable: false,
                movable: false,
                connectable: false,
                resizable: false,
                rotatable: false,
                editable: false,
            },
            selectedStates: [],
        }
    }

    _init() {
        this.on('$change:selectedStates', (c, v) => {
            const states = {};
            for (let key in this.get('states')) {
                states[key] = v.indexOf(key) > -1;
            }
            this.set('states', states);
        });
    }
}