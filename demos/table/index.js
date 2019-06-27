import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            data: [
                {test: 1, aa: 'aa'},
                {test: 2, aa: 'bb'},
            ],
            group: {}
        }
    }

    remove() {
        const data = this.get('data').slice(0);
        data.pop();
        this.set('data', data);
    }

    add() {
        const data = this.get('data').slice(0);
        data.push({test: 2, aa: 'bb'});
        this.set('data', data);
    }

    getCheckedData() {
        console.log(this.table.getCheckedData());
        console.log(this.radioTable.getCheckedData());
    }

    _onChangeGroup(table, c) {
        this.set('group', c);
        console.log('group', c);        
    }
}
