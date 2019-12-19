export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            cities: [
                {name: '北京', value: 'beijing'},
                {name: '上海', value: 'shanghai'},
                {name: '深圳', value: 'shenzhen'},
            ],
            from: '',
            to: '',
        };
    }
}