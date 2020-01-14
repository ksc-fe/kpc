import Intact from 'intact'; 
import template from './index.vdt';
import Select from '../select';
import '../../styles/kpc.styl';
import './index.styl';
import {toggleArray} from '../utils';

export default class TreeSelect extends Select {
    @Intact.template()
    static template = template;

    static propTypes = {
        ...Select.propTypes,
        data: Array,
        checkbox: Boolean,
    };

    defaults() {
        return {
            ...super.defaults(),
            data: [],
            checkbox: false,

            _selectedKeys: [],
            _checkedKeys: [],
        };
    }

    _init() {
        super._init();

        // const resetMultiple = () => {
            // if (this.get('checkbox')) {
                // this.set('multiple', true, {silent: true});
            // }
        // };
        // resetMultiple();
        // this.on('$change:checkbox', resetMultiple);

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
        // this.on('$change:value', (c, v) => {
            // const {multiple, checkbox} = this.get();
            // if (!multiple && !checkbox) {
                // v = [v];
            // }
            // this.set({
                // '_selectedKeys': v,
                // '_checkedKeys': v,
            // }, {async: true});
        // });
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
}

export {TreeSelect}
