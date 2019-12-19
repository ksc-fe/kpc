export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            startArrow: 'none',
            endArrow: 'classic',
            startPoint: [10, 100],
            endPoint: [100, 150],
            type: 'straight',
            strokeStyle: 'solid',
            from: null,
            to: null,
            exit: [0, 0],
            entry: [0, 0],
            useexit: false,
            useentry: false,
        };
    }

    _onSliderChange(name, index, c, value) {
        let propValue = this.get(name).slice(0);
        propValue[index] = value;
        this.set(name, propValue);
    }
}