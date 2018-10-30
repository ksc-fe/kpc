export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: Array.apply(null, {length: 12})
                .map((v, i) => ({label: i + 1 + '月', value: i}))
        };
    }
}