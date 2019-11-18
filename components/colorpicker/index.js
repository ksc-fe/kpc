import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {getTransition} from '../utils';

export default class Colorpicker extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        value: {
            type: String,
            required: true,
        },
        presets: Array,
        size: ['large', 'default', 'small', 'mini'],
    };

    defaults() {
        return {
            transition: 'c-slidedown',
            value: undefined,
            presets: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'], 
            size: 'default',
        };
    }

    _onShow(c) {
        this.set('transition', getTransition(c.get('_feedback')));
    }
}

export {Colorpicker};
