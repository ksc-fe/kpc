export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

let id = 3;
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            tab: 1,
            tabs: [
                {value: 1, label: 'Tab 1'},
                {value: 2, label: 'Tab 2'},
                {value: 3, label: 'Tab 3'},
            ],
            size: 'large',
        }
    }

    _remove(value) {
        const tabs = this.get('tabs').slice(0);
        const index = tabs.findIndex(item => item.value === value);
        tabs.splice(index, 1);

        // 如果删除当前tab，则切换至下一个
        let tab = this.get('tab');
        if (value === tab) {
            const item = tabs[index] || tabs[index - 1];
            tab = item ? item.value : null;
        }

        this.set({tabs, tab});
    }

    _add() {
        const tabs = this.get('tabs').slice(0);
        id++;
        tabs.push({
            value: id,
            label: `Tab ${id}`,
        });
        this.set({tabs, tab: id});
    }
}