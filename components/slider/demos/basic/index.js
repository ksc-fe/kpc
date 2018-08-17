export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            'value1': 60,
            'value2': 277,
            'min': 0,
            'max': 100,
        }
    }

    _changeRange() {
        const max = Math.floor(Math.random() * 100);
        const min = Math.floor(Math.random() * max);
        this.set({max, min});
    }
}