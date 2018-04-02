export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 


export default class extends Intact {
    @Intact.template()
    static template = template;

    setRowKey(value, index) {
        return value.id;
    }

}