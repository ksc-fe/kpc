export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data1: [{a: 'border类型', b: 'type="border"'}],
            data2: [{a: 'grid类型', b: 'type="grid"'}] 
        }
    }
}