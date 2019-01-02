export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {a: '第一行', b: '哈哈1', c: '自定义1'}, 
                {a: '第二行', b: '哈哈2', c: '自定义2'}
            ],
        }
    }

    _export() {
        this.refs.table.exportTable();
    }

    _exportData() {
        this.refs.table.exportTable([
            {a: '第一行', b: '哈哈1', c: '自定义1'}, 
            {a: '第二行', b: '哈哈2', c: '自定义2'},
            {a: '第三行', b: '哈哈3', c: '自定义3'}
        ]);
    }
}