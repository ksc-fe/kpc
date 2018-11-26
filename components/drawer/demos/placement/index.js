export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            show: false,
            showPosition: 'right',
            showList: [{
                key: 'top',
                value: '从上侧出现'
            }, {
                key: 'bottom',
                value: '从下侧出现'
            }, {
                key: 'left',
                value: '从左侧出现'
            }, {
                key: 'right',
                value: '从右侧出现'
            },]
        }
    }

    showDrawer(value) {
        this.set({
            'showPosition': value,
            'show': true
        });
    }
}