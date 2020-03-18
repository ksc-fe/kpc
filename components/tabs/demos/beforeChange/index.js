export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

import Dialog from 'kpc/components/dialog';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            tab: 'ruleout',
        }
    }

    beforeChange(value) {
        return new Promise(resolve => {
            Dialog.confirm({
                content: `Are you sure to change to "${value}"`
            }).then(() => {
                resolve(true);
            }, () => {
                resolve(false);
            });
        });
    }
}