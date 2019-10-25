export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    disabledDate(date, dateObject) {
        // 禁用掉每月的5号和15号
        const d = dateObject.date();
        return d === 5 || d === 15;
    }
}