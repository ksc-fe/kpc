import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import Option from './option';
import Group from './group';
import {selectInput, _$, isStringOrNumber, toggleArray, getTextByChildren} from '../utils';
import {dispatchEvent} from '../datepicker/utils';

const {isEqual} = Intact.utils;

export default class Select extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        data: Array,
        multiple: Boolean,
        disabled: Boolean,
        clearable: Boolean,
        filterable: Boolean,
        filter: Function,
        keywords: String,
        placeholder: String,
        size: ['large', 'default', 'small', 'mini'],
        fluid: Boolean,
        width: [Number, String],
        allowUnmatch: Boolean,
        card: Boolean,
        container: [Function, String],
        inline: Boolean,
        loading: Boolean,
        hideIcon: Boolean,
        position: Object,
        searchable: Boolean,
        autoDisableIcon: Boolean,
    };

    static events = {
        keypress: true,
        keydown: true,
        show: true,
        hide: true,
        change: true
    };

    static blocks = ['format', 'value', 'values', 'menu'];

    defaults() {
        return {
            data: [],
            value: '',
            multiple: false, // 是否支持多选
            disabled: false,
            clearable: false, // 是否可清空
            filterable: false, // 搜索筛选
            filter: (keywords, props) => {
                let valid = false;
                let tmp;
                if (
                    keywords == null ||
                    (
                        props.label &&
                        ~props.label.toLowerCase().indexOf((tmp = keywords.toLowerCase()))
                    ) ||
                    (
                        isStringOrNumber(props.value) &&
                        ~String(props.value).toLowerCase().indexOf(tmp)
                    )
                ) {
                    valid = true;
                }

                return valid;
            },
            keywords: undefined,
            placeholder: undefined,
            size: 'default',
            fluid: false,
            width: undefined,
            allowUnmatch: false,
            card: false, // 卡片式分组
            container: undefined,
            inline: false,
            loading: false,
            hideIcon: false,
            position: {my: 'left top+8', at: 'left bottom'},
            searchable: false,
            autoDisableIcon: false,

            _show: false,
            _activeLabel: undefined,
            _checkedKeys: [],
        }
    }

    _init() {
        this.on('$change:value', (c, v) => {
            this.set('_checkedKeys', v || []);
        });
        this.on('$changed:value', () => {
            if (this._isMultiple()) {
                this._refreshPosition();
            }
        });
    }

    hide() {
        this.refs.menu.hide(true);
    }

    _isMultiple() {
        return this.get('multiple');
    }

    _refreshPosition() {
        if (this.get('_show')) {
            this.refs.menu.position();
        }
    }

    _onClear(e) {
        if (this.get('disabled')) return;

        e.stopPropagation();
        const clearV = !this._isMultiple()? '':[];
        this.set('value', clearV);
        if (!this.get('_show')) {
            this.trigger('change', clearV);
        }
    }

    _onSelect(value) {
        // if we show search input in menu and it supports multiple selections,
        // then the checkbox will be showed.
        // We do nothing on select in this case and add value on click confirm button
        const {searchable, multiple} = this.get();
        if (searchable && multiple) return;

        if (!this._isMultiple()) {
            this.set('value', value, {async: true});
        } else {
            let values = this.get('value');
            values = toggleArray(values, value);
            this.set('value', values, {async: true});
            this._focusInput();
        }
        this._resetSearch();
    }

    _onSearch(e) {
        this.set('keywords', e.target.value.trim());
        // always show menu on searching
        this.refs.menu.show();
        this.refs.menu.focusItemByIndex(0);
        // the position may be flip, and the select input height my change height too,
        // so we should reset the position
        this.refs.menu.position();
    }

    _resetSearch() {
        this.set('keywords', undefined, {async: true});
    }

    _onChangeShow(c, value) {
        if (value) {
            this._oldValue = this.get('value');
        }
        this.set('_show', value);
        // reset the _activeLabel if show
        this._setActiveLabelSilent(undefined);
        if (!value) {
            this._onBlur();
            if (this.get('searchable') && this.get('multiple')) {
                // set the _checkedKeys to value
                this.set('_checkedKeys', this.get('value') || []);
            }
        }

        this.trigger(value ? 'show' : 'hide');
    }

    /**
     * @brief let the blur method be called after select
     * if we have selected the option, then the keywords have been set to undefined
     * in this case, we do nothing, otherwise we reset it
     */
    _onBlur() {
        const {keywords, allowUnmatch} = this.get();
        if (allowUnmatch && keywords != null) {
            this.set({
                value: keywords,
            });
        }

        // this.timer = setTimeout(() => {
            if (this.get('keywords') != null) {
                this._resetSearch();
            }
        // }, 200);
    }

    _selectInput(e) {
        selectInput(e.target);
    }

    // _onFocus(e) {
        // clearTimeout(this.timer);
    // }

    _onFocusout() {
        this.refs.dropdown.hide();
    }

    _delete(value, e) {
        if (this.get('disabled')) return;

        e.stopPropagation();
        const values = this.get('value').slice(0);
        const index = values.indexOf(value);
        values.splice(index, 1);
        this.set('value', values);
        this._focusInput();
        if (!this.get('_show')) {
            this.trigger('change', values);
        }
    }

    _focusInput() {
        if (this.get('filterable')) {
            this.refs.input.focus();
        }
    }

    _position() {
        const menuElement = this.refs.menu.vdt.vNode.children.element;
        const width = this.element.offsetWidth;
        // const menuWidth = menuElement.offsetWidth;
        // if (width > menuWidth) {
            // menuElement.style.width = `${width}px`;
        // }
        menuElement.style.minWidth = `${width}px`;
    }

    _onKeypress(e) {
        this.trigger('keypress', e);
        if (e.keyCode === 13) {
            this.refs.wrapper.click();
        }
    }

    _onKeydown(e) {
        this.trigger('keydown', e);
        if (e.keyCode === 9) { // tab
            this.refs.dropdown.hide();
        }
    }

    _clearValue() {
        this.set('value', '', {update: false});
    }

    _setActiveLabelSilent(label) {
        this.set('_activeLabel', label, {silent: true});
    }

    handleProps(props, labelObj) {
        const {value, filterable, keywords, filter, searchable} = this.get();
        let active = false;
        let valid = false;

        if (!this._isMultiple()) {
            if (props.value === value) {
                // set label
                labelObj.label = props.label;
                active = true;
            } else {
                active = false;
            }
        } else if (Array.isArray(value)) {
            const index = value.indexOf(props.value);
            if (~index) {
                // keep order consistent
                labelObj.labels[index] = props.label;
                active = true;
            } else {
                active = false;
            }
        }

        if (!filterable && !searchable || filter.call(this, keywords, props)) {
            valid = true;
        }

        return {active, valid};
    }

    handlerGroupProps (children) {
        const {filterable, keywords, filter, searchable} = this.get();
        let valid = false;
        if (!filterable && !searchable) {
            valid = true;
        } else {
            valid = children.some(item => {
                let props = item.props;
                if (item.tag === Group) {
                    return this.handlerGroupProps(props.children);
                } else {
                    const label = props.label || getTextByChildren(props.children);
                    props = {
                        ...props,
                        label
                    }
                    return filter.call(this, keywords, props);
                }
            })
        }
        return valid;
    }

    /**
     * don't trigger focusout event when layer is showing,
     * only trigger focusout when it hidden to make FormItem to validate it
     * #449
     */
    _onInputFocusOut(e) {
        if (this.get('_show')) {
            e.stopPropagation();
        }
    }

    _onHide() {
        this._triggerChange();
        dispatchEvent(this.element, 'focusout');
    }

    _selectAll(allShowedValues) {
        this.set('_checkedKeys', addKeys(this.get('value'), allShowedValues));
    }

    _unselectAll(allShowedValues) {
        this.set('_checkedKeys', removeKeys(this.get('value'), allShowedValues));
    }

    _toggleSelect(allShowedValues) {
        const {value, _checkedKeys} = this.get();
        const checked = [];
        const unchecked = [];
        allShowedValues.forEach(item => {
            if (_checkedKeys.indexOf(item) > -1) {
                checked.push(item);
            } else {
                unchecked.push(item);
            }
        });

        this.set('_checkedKeys', removeKeys(addKeys(value, unchecked), checked));
    }

    _confirm() {
        this.set('value', this.get('_checkedKeys'));
        this.hide();
    }

    _triggerChange() {
        const {value} = this.get();
        if (!isEqual(this._oldValue, value)) {
            this._oldValue = value;
            this.trigger('change', value);
        }
    }
}

function addKeys(origin, keys) {
    return Array.from(new Set([...keys, ...(origin || [])]));
}

function removeKeys(origin, keys) {
    return (origin || []).filter(item => keys.indexOf(item) < 0);
}

export {Select, Option, Group as OptionGroup};
