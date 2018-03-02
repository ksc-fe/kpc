import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class Transfer extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [],
            value: [],
            leftChecked: [],
            rightChecked: [],
            filterable: true,
        };
    }

    _mount() {
        document.addEventListener('keydown', this._onKeydown);
        document.addEventListener('keyup', this._onKeyup);
    }

    _onKeydown(e) {
        if (e.keyCode === 16) {
            this.shiftKey = true;
        }
    }

    _onKeyup(e) {
        if (e.keyCode === 16) {
            this.shiftKey = false;
        }
    }

    _add() {
        const value = this.get('value').concat(this.get('leftChecked'));
        this.set({
            leftChecked: [],
            value: value,
        });
    }

    _remove() {
        const value = this.get('value').slice(0);
        this.get('rightChecked').forEach(item => {
            const index = value.indexOf(item);
            value.splice(index, 1);
        });
        this.set({
            rightChecked: [],
            value: value,
        });
    }

    _onCheckboxChange(type, index, e) {
        const keywords = this.get(`${type}Keywords`);
        const data = type === 'left' ? this.get('data') : this.get('value');
        if (this.startIndex === undefined || !this.shiftKey) {
            this.startIndex = index;
            this.checked = e.target.checked;
        } else if (this.shiftKey) {
            let values = data.filter(item => {
                return keywords ? item.label.includes(keywords) : true;
            });
            if (index > this.startIndex) {
                values = values.slice(this.startIndex, index + 1);
            } else if (index < this.startIndex) {
                values = values.slice(index, this.startIndex + 1);
            }
            values = values.filter(item => !item.disabled);
            const checkedValues = this.get(`${type}Checked`);
            const _values = [];
            if (this.checked) {
                checkedValues.forEach(item => {
                    if (!~values.indexOf(item)) {
                        _values.push(item);
                    }
                });
                this.set(`${type}Checked`, values.concat(_values));
            } else {
                checkedValues.forEach(item => {
                    if (!~values.indexOf(item)) {
                        _values.push(item);
                    }
                });
                this.set(`${type}Checked`, _values);
            }
        }
    }

    _onClickLabel(e) {
        if (e.shiftKey && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            e.target.click();
        }
    }

    _destroy() {
        document.removeEventListener('keydown', this._onKeydown);
        document.removeEventListener('keyup', this._onKeyup);
    }
}
