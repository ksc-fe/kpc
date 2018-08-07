import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {_$} from '../utils';

export default class Transfer extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        data: Array,
        value: Array,
        leftChecked: Array,
        rightChecked: Array,
        filterable: Boolean,
        filter: Function,
        label: Function,
        keyName: String,
        placeholder: String,
        leftTitle: [String, Intact.VNode],
        rightTitle: [String, Intact.VNode],
    };

    defaults() {
        return {
            data: [],
            value: [],
            leftChecked: [],
            rightChecked: [],
            filterable: false,
            filter(data, keywords) {
                return data.label.includes(keywords);
            },
            label(data, index) {
                return data.label;
            },
            keyName: 'key',
            placeholder: _$('请输入'),
            leftTitle: _$('请选择'),
            rightTitle: _$('已选择'),
        };
    }

    _init() {
        const fixValue = (v) => {
            if (!Array.isArray(v)) {
                this.set('value', [], {silent: true});
            }
        };
        this.on('$receive:value', (c, v) => fixValue(v));
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
        const filter = this.get('filter');

        if (this.startIndex === undefined || !this.shiftKey) {
            this.startIndex = index;
            this.checked = e.target.checked;
        } else if (this.shiftKey) {
            let values = data;
            if (this.get('filterable') && keywords) {
                values = data.filter(item => filter(item, keywords));
            }
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

    _isCheckAll(model) {
        const checked = this.get(`${model}Checked`);
        let data = this.get('value');

        if (model === 'left') {
            data = this.get('data').filter(item => {
                return !~data.indexOf(item) && !item.disabled;
            });
        } else {
            data = data.filter(item => !item.disabled);
        }

        return data.length && checked.length >= data.length;
    }

    _toggleCheckAll(model, e) {
        if (e.target.checked) {
            this._selectAll(model);
        }  else {
            this.set(`${model}Checked`, []);
        }
    }

    _selectAll(model) {
        let data = this.get('value');
        if (model === 'left') {
            data = this.get('data').filter(item => {
                return !~data.indexOf(item) && !item.disabled;
            });
        } else {
            data = data.filter(item => !item.disabled);
        }

        let keywords = this.get(`${model}Keywords`);
        if (this.get('filterable') && keywords) {
            let filter = this.get('filter');
            data = data.filter(item => filter(item, keywords));
        }

        this.set(`${model}Checked`, data);
    }

    _destroy() {
        document.removeEventListener('keydown', this._onKeydown);
        document.removeEventListener('keyup', this._onKeyup);
    }
}

export {Transfer}
