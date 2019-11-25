export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

import tinycolor from 'tinycolor2';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: '#ddd'
        };
    }

    _onInput(e) {
        const value = e.target.value.trim();
        const color = tinycolor(value);
        if (color.isValid()) {
            const newValue = color.toHexString();
            this.set('value', newValue);
        }
    }
}