import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class Transfer extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [],
            value: [],
            leftChecked: [],
            rightChecked: [],
            filterable: true,
        };
    }

    _add() {
        const value = this.get('value').concat(this.get('leftChecked'));
        this.set({
            leftChecked: [],
            value: value,
        });
    }

    _remove() {
        const value = this.get('value').slice(0);
        this.get('rightChecked').forEach(item => {
            const index = value.indexOf(item);
            value.splice(index, 1);
        });
        this.set({
            rightChecked: [],
            value: value,
        });
    }
}

