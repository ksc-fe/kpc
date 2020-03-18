export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

import {range} from 'kpc/components/utils';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: range(1, 100).map(item => {
                return {
                    name: 'name ' + item,
                    ip: '127.0.0.' + item
                };
            }),
        }
    }

    scrollToRowByIndex() {
        this.refs.table.scrollToRowByIndex(19);
    }

    scrollToRowByKey() {
        this.refs.table.scrollToRowByKey('name 25');
    }
}