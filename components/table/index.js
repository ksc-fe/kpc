import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            checkType: 'checkbox', // radio | none 
            rowKey(value, index) { return index; },
            checkedKeys: [],
            rowCheckable: true, // click row to check
        }
    }

    toggleCheckAll(c, checked) {
        if (checked) {
            this.checkAll();
        } else {
            this.uncheckAll();
        }
    }

    checkAll() {
        const rowKey = this.get('rowKey');
        this.set('checkedKeys', this.get('data').map((value, index) => {
            return rowKey.call(this, value, index); 
        }));
    }

    uncheckAll() {
        this.set('checkedKeys', []);
    }

    _rowCheck(value, index, e) {
        // if is from checkbox then do nothing
        if (e.target.tagName.toLowerCase() === 'input') return;

        if (this.get('rowCheckable')) {
            this._checkUncheckRow(value, index);
        }
    }

    _checkRow(value, index) {
        this._checkUncheckRow(value, index, true, false);
    }

    _uncheckRow(value, index) {
        this._checkUncheckRow(value, index, false, false);
    }

    _checkUncheckRow(value, index, isCheck = false, isToggle = true) {
        const checkedKeys = this.get('checkedKeys').slice(0);
        const key = this.get('rowKey').call(this, value, index);
        const i = checkedKeys.indexOf(key);
        if ((!isCheck || isToggle) && i > -1) {
            checkedKeys.splice(i, 1);
            this.set('checkedKeys', checkedKeys);
        } else if (isCheck || isToggle) {
            checkedKeys.push(key);
            this.set('checkedKeys', checkedKeys);
        }
    }
}
