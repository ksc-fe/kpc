import Intact from 'intact'; 
import template from './index.vdt';
import Select from '../select';
import '../../styles/kpc.styl';
import './index.styl';

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

        const resetMultiple = () => {
            if (this.get('checkbox')) {
                this.set('multiple', true, {silent: true});
            }
        };
        resetMultiple();
        this.on('$change:checkbox', resetMultiple);

        this._initLabels();
        this.on('$change:value', this._initLabels);
        this.on('$change:value', (c, v) => {
            const {multiple, checkbox} = this.get();
            if (!multiple && !checkbox) {
                v = [v];
            }
            this.set({
                '_selectedKeys': v,
                '_checkedKeys': v,
            }, {async: true});
        });
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

    _select(node) {
        this._onSelect(node.key);
        if (!this.get('multiple')) {
            this.set({_selectedKeys: [node.key]}, {async: true});
        }
    }
}

export {TreeSelect}
