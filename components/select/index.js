import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import Option from './option';
import Group from './group';
import {selectInput, _$, isStringOrNumber, toggleArray} from '../utils';

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
    };

    static events = {
        keypress: true,
        keydown: true,
    };

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

            _show: false,
            _activeLabel: undefined,
        }
    }

    _init() {
        this.on('$changed:value', () => {
            if (this.get('multiple') && this.get('_show')) {
                this.refs.menu.position();
            }
        });
    }

    _onClear(e) {
        e.stopPropagation();
        this.set('value', '');
    }

    _onSelect(value) {
        if (!this.get('multiple')) {
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
        this.set('_show', value);
        // reset the _activeLabel if show
        this._setActiveLabelSilent(undefined);
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

        this.timer = setTimeout(() => {
            if (this.get('keywords') != null) {
                this._resetSearch();
            }
        }, 200);
    }

    _selectInput(e) {
        selectInput(e.target); 
    }

    _onFocus(e) {
        clearTimeout(this.timer);
    }

    _onFocusout() {
        this.refs.dropdown.hide();
    }

    _delete(value, e) {
        e.stopPropagation();
        const values = this.get('value').slice(0);
        const index = values.indexOf(value);
        values.splice(index, 1);
        this.set('value', values);
        this._focusInput();
    }

    _focusInput() {
        if (this.get('filterable')) {
            this.refs.input.focus();
        }
    }

    _position() {
        const menuElement = this.refs.menu.vdt.vNode.children.element;
        const width = this.element.offsetWidth;
        const menuWidth = menuElement.offsetWidth;
        if (width > menuWidth) {
            menuElement.style.width = `${width}px`;
        }
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
        const {multiple, value, filterable, keywords, filter} = this.get();
        let active = false;
        let valid = false;

        if (!multiple) {
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

        if (!filterable || filter.call(this, keywords, props)) {
            valid = true;
        }

        return {active, valid};
    }
}

export {Select, Option, Group as OptionGroup};
