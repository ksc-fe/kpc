export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Form from 'kpc/components/form';

export default class extends Intact {
    @Intact.template()
    static template = template;

    validateUserName(value) {
        // mock api
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    reject({message: `用户名 ${value} 已被占用`});
                } else {
                    resolve(true);
                }
            });
        });
    }
}