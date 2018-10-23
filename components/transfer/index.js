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
        this.on('$receive:data', (c, v) => {
            if (!v || !v.length) {
                this.set({
                    leftChecked: [],
                    rightChecked: [],
                    value: []
                });
            } else {
                const {leftChecked, rightChecked, value} = this.get();
                const fix = (data) => {
                    const ret = [];
                    if (data) {
                        for (let i = 0; i < data.length; i++) {
                            if (v.indexOf(data[i]) > -1) {
                                ret.push(data[i]);
                            }
                        }
                    }
                    return ret;
                };
                this.set({
                    leftChecked: fix(leftChecked),
                    rightChecked: fix(rightChecked),
                    value: fix(value)
                });
            }
        });
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
        if (this.startIndex === undefined || !e.shiftKey) {
            this.startIndex = index;
            this.endIndex = undefined;
            this.checked = e.target.checked;
        } else if (e.shiftKey) {
            e.preventDefault();

            const values = this._getShowedData(type);
            const checkedValues = this.get(`${type}Checked`).slice(0);
            const lastEndIndex = this.endIndex;
            this.endIndex = index;
            const update = (data, isCheck) => {
                data.forEach(item => {
                    if (!item.disabled) {
                        const index = checkedValues.indexOf(item);
                        if (isCheck) {
                            if (!~index) {
                                checkedValues.push(item);
                            }
                        } else {
                            if (~index) {
                                checkedValues.splice(index, 1);
                            }
                        }
                    }
                });
            };

            if (lastEndIndex !== undefined) {
                // if exists lastEndIndex, we reset the last result
                // and set it again
                update(
                    values.slice(
                        Math.min(index, lastEndIndex),
                        Math.max(index, lastEndIndex) + 1
                    ),
                    !this.checked
                ); 
            }
            update(
                values.slice(
                    Math.min(index, this.startIndex),
                    Math.max(index, this.startIndex) + 1
                ), 
                this.checked
            );

            this.set(`${type}Checked`, checkedValues);
        }
    }

    _isCheckAll(model) {
        const checked = this.get(`${model}Checked`);
        const data = this._getEnabledData(model);

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
        this.set(`${model}Checked`, this._getEnabledData(model));
    }

    _getEnabledData(model) {
        return this._getShowedData(model).filter(item => {
            return !item.disabled;
        });
    }

    _getShowedData(model) {
        let data = this.get('value');
        if (model === 'left') {
            data = this.get('data').filter(item => {
                return !~data.indexOf(item)
            });
        }

        let keywords = this.get(`${model}Keywords`);
        if (this.get('filterable') && keywords) {
            let filter = this.get('filter');
            data = data.filter(item => filter(item, keywords));
        }

        return data;
    }
}

export {Transfer}
