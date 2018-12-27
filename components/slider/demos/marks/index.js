export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            marks: {
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6月',
                7: '7',
                8: '8',
                9: '9',
                10: '1年',
                11: '2年',
                12: '3年',
            }
        }
    }
}