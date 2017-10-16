import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            data: [],
            checkType: 'checkbox', // radio | none 
            rowKey(value, index) { return index; },
            checkedKeys: [], // for checkbox
            checkedKey: undefined, // for radio
            rowCheckable: true, // click row to check
        }
    }

    _init() {
        // keep the event consistent
        this.on('$change:checkedKeys', (c, newValue, oldValue) => {
            this.trigger('$change:checked', c, newValue, oldValue);
        });
        this.on('$change:checkedKey', (c, newValue, oldValue) => {
            this.trigger('$change:checked', c, [newValue], [oldValue]);
        });
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

    /**
     * @brief get the checked data
     * @return {Array}
     */
    getCheckedData() {
        const rowKey = this.get('rowKey');
        const checkType = this.get('checkType');
        if (checkType === 'checkbox') {
            const checkedKeys = this.get('checkedKeys');
            const checkedKeysMap = {};
            checkedKeys.forEach((item) => {
                checkedKeysMap[item] = true;
            });
            return this.get('data').filter((value, index) => {
                const key = rowKey.call(this, value, index);
                return checkedKeysMap[key];
            });
        } else if (checkType === 'radio') {
            const checkedKey = this.get('checkedKey');
            return this.get('data').filter((value, index) => {
                return rowKey.call(this, value, index) === checkedKey;
            });
        } else {
            return [];
        }
    }

    _toggleCheckAll(c, checked) {
        if (checked) {
            this.checkAll();
        } else {
            this.uncheckAll();
        }
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
        const checkType = this.get('checkType');
        const key = this.get('rowKey').call(this, value, index);
        if (checkType === 'checkbox') {
            const checkedKeys = this.get('checkedKeys').slice(0);
            const i = checkedKeys.indexOf(key);
            if ((!isCheck || isToggle) && i > -1) {
                checkedKeys.splice(i, 1);
                this.set('checkedKeys', checkedKeys);
            } else if (isCheck || isToggle) {
                checkedKeys.push(key);
                this.set('checkedKeys', checkedKeys);
            }
        } else if (checkType === 'radio') {
            this.set('checkedKey', key);
        }
    }
}
