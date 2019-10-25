import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class Demo extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: [],
            selectedKey: '3-1',
            data: Array.apply(null, {length: 100}),
        };
    }
}