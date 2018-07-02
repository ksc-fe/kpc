import Intact from 'intact'; 
import Select from '../select';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Cascader extends Select {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            ...super.defaults(),
            data: undefined,
        };
    }

    // overwide
    _position() {  }

    _onClick(value, index) {
        let values = this.get('value');
        if (!Array.isArray(values)) {
            values = [];
        } else {
            values = values.slice(0, index);
        }

        values[index] = value;

        this.set('value', values);
    }

    _clearValue() {  }

    handleProps(props, labelObj, level) {
        const {value, filterable, keywords} = this.get();
        let active = false;
        let valid = false;

        if (Array.isArray(value)) {
            if (value[level] === props.value) {
                if (labelObj.label) {
                    labelObj.label += ' / ' + props.label;
                } else {
                    labelObj.label = props.label;
                }
                active = true;
            }
        }

        // let tmp;
        // if (
            // !filterable && 
            // props.label || 
            // keywords == null || 
            // ~props.label.toLowerCase().indexOf((tmp = keywords.toLowerCase())) || 
            // (
                // isStringOrNumber(props.value) && 
                // ~String(props.value).toLowerCase().indexOf(tmp)
            // )
        // ) {
            // valid = true; 
        // }

        return {active, valid};
    }

}
