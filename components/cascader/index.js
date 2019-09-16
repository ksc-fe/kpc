import Intact from 'intact'; 
import Select from '../select';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Cascader extends Select {
    @Intact.template()
    static template = template;

    static blocks = [...Select.blocks, 'format'].filter(Boolean);

    defaults() {
        return {
            ...super.defaults(),
            data: undefined,
            trigger: 'click',
            changeOnSelect: false,
            format: (values) => values.map(value => value.label).join(' / '),
            filter: (keywords, props) => props.label.indexOf(keywords) > -1,
            loadData: (item) => {},

            _value: [],
        };
    }

    static propTypes = {
        ...Select.propTypes,
        data: Array,
        trigger: String,
        changeOnSelect: Boolean,
        format: Function,
        filter: Function,
        loadData: Function,
    };

    _init() {
        this.on('$receive:value', (c, v) => {
            this.set('_value', v);
        });
    }

    _onClick(item, index) {
        let values = this.get('_value');
        if (!Array.isArray(values)) {
            values = [];
        } else {
            values = values.slice(0, index);
        }

        values[index] = item.value;

        this.set('_value', values, {async: true});
        if (this.get('changeOnSelect')) {
            this.set('value', values);
        }
    }

    _onSelect() {
        this.set('value', this.get('_value').slice(0));
    }

    /**
     * on sub menu showed, load data if children is empty
     */
    async _onSubMenuShow(item) {
        if (item.children && !item.children.length) {
            await this.get('loadData').call(this, item);
            this.update();
        }
    }

    _clearValue() {  }

    handleProps(props, labelObj, level) {
        const {_value, value} = this.get();
        let active = false;
        let selected = false;

        if (Array.isArray(_value)) {
            if (_value[level] === props.value) {
                active = true;
            }
        }

        if (Array.isArray(value)) {
            if (value[level] === props.value) {
                labelObj.values.push(props);
                selected = true;
            }
        }

        return {active, selected};
    }

    _onSearch(e) {
        const keywords = e.target.value.trim();
        if (keywords) {
            super._onSearch(e);
        } else {
            this.set('keywords', keywords);
            this.refs.cascader.show();
        }
    }

    _filter() {
        const {data, keywords, filter} = this.get();
        const ret = [];

        const walk = (data, prefix = [], valid = false, disabled = false) => {
            data.forEach(item => {
                let _valid = valid || filter.call(this, keywords, item);
                let _disabled = disabled || item.disabled
                const _prefix = prefix.slice(0);
                _prefix.push(item);
                if (item.children) {
                    walk(item.children, _prefix, _valid, _disabled);
                } else if (_valid) {
                    _prefix.disabled = _disabled;
                    ret.push(_prefix);
                }
            });
        }
        walk(data);

        return ret;
    }

    _selectByFilter(value) {
        const _value = value.map(item => item.value);
        this.set({
            value: _value,
            _value: _value,
        }, {async: true});
        this._resetSearch();
    }
}

export {Cascader};
