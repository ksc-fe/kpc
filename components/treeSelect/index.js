import Intact from 'intact'; 
import template from './index.vdt';
import Select from '../select';
import '../../styles/kpc.styl';
import './index.styl';
import {toggleArray, isStringOrNumber} from '../utils';

export default class TreeSelect extends Select {
    @Intact.template()
    static template = template;

    static propTypes = {
        ...Select.propTypes,
        data: {
            /* istanbul ignore next */
            validator(value) {
                if (!Array.isArray(value)) return `"data" must be an Array.`;
                let msg;
                const loop = (children) => {
                    if (!children) return true;
                    for (let i = 0; i < children.length; i++) {
                        const item = children[i];
                        if (typeof item !== 'object') return (msg = `the item of "data" must be an object.`);
                        if (item.key == null) return (msg = `each object in "data" must has "key" property.`);

                        if (loop(item.children) !== true) {
                            break;
                        }
                    }
                    return true;
                };
                loop(value);
                if (msg) {
                    return msg;
                }
                return true;
            },
        },
        checkbox: Boolean,
        load: Function,
    };

    defaults() {
        return {
            ...super.defaults(),
            data: [],
            checkbox: false,
            load: undefined,
            filter: undefined,

            _selectedKeys: [],
            _checkedKeys: [],
        };
    }

    _init() {
        super._init();

        this.on('$receive', (c, keys) => {
            const {checkbox, multiple} = this.get();
            if (keys.indexOf('checkbox') > -1) {
                if (checkbox) {
                    this.set('multiple', true, {silent: true});
                } else if (keys.indexOf('multiple') < 0) {
                    this.set('multiple', false, {silent: true});
                }
            } else {
                if (keys.indexOf('multiple') < 0) {
                    this.set('multiple', false, {silent: true});
                }
            }
        });

        this._initLabels();
        this.on('$change:value', this._initLabels);
    }

    _initLabels() {
        const {data, value, multiple, checkbox} = this.get();
        this.label = null;
        const labels = this.labels = [];

        if (!data || value === undefined) return;

        let counts = 0;
        const loop = (children) => {
            return children.find(item => {
                if (!multiple && !checkbox) {
                    if (item.key === value) {
                        this.label = item.label;
                        return true;
                    }
                } else {
                    let index;
                    if (value && (index = value.indexOf(item.key)) > -1) {
                        // keep the order
                        labels[index] = item.label;
                        if (++counts === value.length) {
                            return true;
                        }
                    }
                }
                if (item.children) {
                    return loop(item.children);
                }
                return false;
            });
        };
        loop(data);
    }

    _select(node, e) {
        const {multiple, checkbox, _checkedKeys} = this.get();
        const key = node.key;
        if (!checkbox) {
            this._onSelect(key);
            if (!multiple) {
                this.set({_selectedKeys: [key]}, {async: true});
                this.refs.menu.hide(true);
            }
        } else {
            // check on click
            this.refs.tree._toggleCheck(node, e);
        }
    }

    _onCheckedKeysChange(c, keys) {
        const value = this._getAllCheckedKeys();
        this.set({
            _checkedKeys: keys,
            value,
        });
    }

    _getAllCheckedKeys() {
        const keys = [];
        const loop = (children) => {
            for (let i = 0; i < children.length; i++) {
                const node = children[i];
                if (node.checked) {
                    keys.push(node.key);
                    continue;
                }
                if (node.children) {
                    loop(node.children);
                }
            }
        }
        loop(this.refs.tree.root.children);

        return keys;
    }

    _filter(data) {
        let keywords = this.get('keywords');
        if (!keywords || !(keywords = keywords.trim())) return true;

        let filter = this.get('filter');
        if (filter) return filter.call(this, keywords, data);

        keywords = keywords.toLowerCase();

        return data.label.toLowerCase().includes(keywords) ||
            isStringOrNumber(data.key) && 
            String(data.key).toLowerCase().includes(keywords);
    }
}

export {TreeSelect}
