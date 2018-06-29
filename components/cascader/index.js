import Intact from 'intact'; 
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Cascader extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: undefined 
        };
    }
}
