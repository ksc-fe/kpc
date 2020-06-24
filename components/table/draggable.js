import BaseTable from './base';
import {debounce} from '../utils';

export default class DraggableTable extends BaseTable {
    _onRowDragStart(e, row) {
        this._draggingRow = row;
        this.scroll.querySelectorAll('tr').forEach(tr => {
            tr._height = tr.offsetHeight;
        });
    }

    _onRowDragOver(e, row) {
        if (row === this._draggingRow) return;

        console.log('enter');

        const {clientY} = event;
        if (this._clientY === clientY) return;

        this._clientY = clientY;

        this._handleDragOver();
    }

    _handleDragOver() {
        const oldIndex = this._draggingRow.get('index');
        const index = this._findInsertIndex();

        if (index === oldIndex) return;

        console.log('exchange');

        const data = this.get('data').slice(0);
        const item = data.splice(oldIndex, 1)[0];
        data.splice(index, 0, item);

        this.set('data', data);
    }

    _findInsertIndex() {
        const clientY = this._clientY;
        const tbody = this.scroll;
        const top = tbody.getBoundingClientRect().top;
        const trs = tbody.querySelectorAll('tr');
        const offsetY = tbody.scrollTop + clientY - top;

        let sum = 0;
        let i = 0;
        for (i = 0; i < trs.length; i++) {
            sum += trs[i]._height;
            if (offsetY < sum) {
                return i;
            }
        }

        return i - 1;
    }


    _onRowDragEnd(e, index) {
        e.preventDefault();
    }
}
