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
            enableAdd: () => this.get('leftChecked').length,
            enableRemove: () => this.get('rightChecked').length,

            selectedKeys: [],
            leftCheckedKeys: [],
            rightCheckedKeys: [],
        };
    }

    _init() {
        const fixValue = (v) => {
            if (!Array.isArray(v)) {
                this.set('value', [], {silent: true});
            }
        };
        this.on('$receive:value', (c, v) => fixValue(v));

        // keep the keys consistence with the conresponding value
        const setKeys = (key, value) => {
            const keyName = this.get('keyName');
            this.set(key, value.map(item => {
                return item[keyName];
            }));
        };
        const setValues = (key, value, list) => {
            const keyName = this.get('keyName');
            this.set(key, list.filter(item => {
                return ~value.indexOf(item[keyName]);
            }));
        };
        // maybe the value is undefined, but above $receive:value is called after this
        fixValue(this.get('value'));
        setKeys('selectedKeys', this.get('value'));
        this.on('$change:value', (c, v) => setKeys('selectedKeys', v));
        [
            ['leftCheckedKeys', 'leftChecked', 'data'],
            ['rightCheckedKeys', 'rightChecked', 'value']
        ].forEach(([key, value, list]) => {
            this.on(`$receive:${value}`, (c, v) => setKeys(key, v));
            this.on(`$change:${key}`, (c, v) => setValues(value, v, this.get(list)));
        });
        
        // only change the left status, reserve the right status
        this.on('$receive:data', (c, v) => {
            if (!v || !v.length) {
                this.set({
                    leftCheckedKeys: []
                });
            } else {
                const {leftCheckedKeys, keyName} = this.get();
                const allKeys = v.reduce((memo, item) => {
                    memo[item[keyName]] = true;
                    return memo;
                }, {});
                const fix = (keys) => {
                    const ret = [];
                    if (keys) {
                        keys.forEach(key => {
                            if (allKeys[key]) {
                                ret.push(key);
                            }
                        });
                    }
                    return ret;
                };
                this.set({
                    leftCheckedKeys: fix(leftCheckedKeys),
                });
            }
        });
    }

    _add() {
        let {data, value, leftCheckedKeys, keyName} = this.get();
        value = value.concat(data.filter(item => {
            return ~leftCheckedKeys.indexOf(item[keyName]);
        })); 
        this.set({
            leftCheckedKeys: [],
            value: value,
        });

        this.trigger('add');
    }

    _remove() {
        let {value, rightCheckedKeys, keyName} = this.get();
        value = value.filter(item => {
            return !~rightCheckedKeys.indexOf(item[keyName]);
        });
        this.set({
            rightCheckedKeys: [],
            value: value,
        });
        
        this.trigger('remove');
    }

    _onCheckboxChange(type, index, e) {
        if (this.startIndex === undefined || !e.shiftKey) {
            this.startIndex = index;
            this.endIndex = undefined;
            this.checked = e.target.checked;
        } else if (e.shiftKey) {
            e.preventDefault();

            const values = this._getShowedData(type);
            const checkedKeys = this.get(`${type}CheckedKeys`).slice(0);
            const lastEndIndex = this.endIndex;
            const keyName = this.get('keyName');
            this.endIndex = index;
            const update = (data, isCheck) => {
                data.forEach(item => {
                    if (!item.disabled) {
                        const key = item[keyName];
                        const index = checkedKeys.indexOf(key);
                        if (isCheck) {
                            if (!~index) {
                                checkedKeys.push(key);
                            }
                        } else {
                            if (~index) {
                                checkedKeys.splice(index, 1);
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

            this.set(`${type}CheckedKeys`, checkedKeys);
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
            this.set(`${model}CheckedKeys`, []);
        }
    }

    _selectAll(model) {
        const keyName = this.get('keyName');
        this.set(`${model}CheckedKeys`, this._getEnabledData(model).map(item => item[keyName]));
    }

    _getEnabledData(model) {
        return this._getShowedData(model).filter(item => {
            return !item.disabled;
        });
    }

    _getShowedData(model) {
        let data;
        if (model === 'left') {
            const {selectedKeys, keyName} = this.get();
            data = this.get('data').filter(item => {
                return !~selectedKeys.indexOf(item[keyName]);
            });
        } else {
            data = this.get('value');
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
