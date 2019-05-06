import template from './index.vdt';
import './index.styl';
import {range} from '../../components/utils';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: range(0, 10).map(item => {
                return {
                    name: 'name ' + item,
                    ip: '127.0.0.' + item
                };
            }),
            tab: 'detail',
            size: '0px',
            selectedData: undefined,
            checkedKeys: [],
        }
    }

    _close() {
        this.set('size', '0px');
    }

    _open() {
        if (this.get('size') === '0px') {
            this.set('size', '200px');
        }
    }

    _togglePanel(table, keys) {
        if (keys.length === 1) {
            // 只选中一行时，展开详情面板
            const data = table.getCheckedData()[0];
            this.set('selectedData', data);
            this._open();
        } else {
            this._close();
        }
    }

    _onClickRow(data, index, key) {
        const checkedKeys = this.get('checkedKeys');
        if (checkedKeys.length === 1 && checkedKeys[0] === key) {
            // 如果只选中了一行，再次点击当前行，则取消选中
            key = [];
        } else {
            // 否则只选中当前行
            key = [key];
        }
        this.set('checkedKeys', key);
    }
}
