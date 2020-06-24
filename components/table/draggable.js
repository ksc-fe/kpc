import BaseTable from './base';
import {debounce} from '../utils';

export default class DraggableTable extends BaseTable {
    static events = {
        ...BaseTable.events,
        dragstart: true,
        dragend: true,
    };

    defaults() {
        return {
            ...super.defaults(),

            _dragKey: undefined,
        }
    }

    _onRowDragStart(e, row) {
        this._draggingRow = row;
        const key = row.get('rowKey');
        this.set('_dragKey', key);
        this.scroll.querySelectorAll('tr').forEach(tr => {
            tr._height = tr.offsetHeight;
        });

        this._dragIndex = row.get('index');
        this.trigger('dragstart', {
            key,
            from: this._dragIndex,
        });
    }

    _onRowDragOver(e, row) {
        if (row === this._draggingRow) return;

        const {clientY} = event;
        if (this._clientY === clientY) return;

        this._clientY = clientY;

        this._handleDragOver();
    }

    _handleDragOver() {
        const oldIndex = this._draggingRow.get('index');
        const index = this._findInsertIndex();

        if (index === oldIndex) return;

        const data = this.get('data').slice(0);
        const item = data.splice(oldIndex, 1)[0];
        data.splice(index, 0, item);

        this._dropIndex = index;

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


    _onRowDragEnd(e, row) {
        e.preventDefault();

        this.set('_dragKey', undefined);

        this.trigger('dragend', {
            key: row.get('rowKey'),
            from: this._dragIndex,
            to: this._dropIndex,
        });
    }
}
