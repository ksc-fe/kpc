export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {label: '星期一', value: 'Monday'},
                {label: '星期二', value: 'Tuesday'},
                {label: '星期三', value: 'Wednesday'},
                {label: '星期四', value: 'Thursday'},
                {label: '星期五', value: 'Friday'},
                {label: '星期六', value: 'Saturday'},
                {label: '星期天', value: 'Sunday'},
            ]
        }
    }
}