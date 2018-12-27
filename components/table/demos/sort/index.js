export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [{name: 'aa', age: 1}, {name: 'cc', age: 5}, {name: 'bb', age: 9}],
            scheme: {
                name: {
                    title: '姓名',
                    sortable: true
                },
                age: {
                    title: '年龄',
                    sortable: true
                }
            },
            sort: {}
        }
    }

    _onSort(c, sort) {
        console.log(sort);
        const data = this.get('data').slice(0);
        data.sort((a, b) => {
            return sort.type === 'desc' ? 
                (a[sort.key] > b[sort.key] ? -1 : 1) : 
                (a[sort.key] > b[sort.key] ? 1 : -1);
        });
        this.set({data, sort});
    }
}