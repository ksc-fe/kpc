import Intact from 'intact';
import template from './index.vdt';
import './index.styl';
import position from '../moveWrapper/position';
import Option from './option';
import Group from './group';

export default class Select extends Intact{
    @Intact.template()
    static template = template;

    static propTypes = {
        multiple: Boolean,
        disabled: Boolean,
        clearable: Boolean,
        filterable: Boolean,
    };

    defaults() {
        return {
            data: [],
            value: '',
            multiple: false, //支持多选li
            disabled: false,
            clearable: false, // 是否可清空 
            filterable: false, // 搜索筛选
            keywords: undefined,
            placeholder: '请选择',
            size: 'default',

            _show: false,
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
            this.set('value', value);
        } else {
            let values = this.get('value');
            if (!Array.isArray(values)) {
                values = [];
            } else {
                values = values.slice(0);
            }
            const index = values.indexOf(value);
            if (~index) {
                // if find, delete it
                values.splice(index, 1); 
            } else {
                values.push(value);
            }
            this.set('value', values);
            this._focusInput();
        }
        this._resetSearch();
    }

    _onSearch(e) {
        this.set('keywords', e.target.value);
        // always show menu on searching
        this.refs.menu.show();
        this.refs.menu.focusItemByIndex(0);
        // in multiple mode, it may lead the height to change
        if (this.get('multiple')) {
            this.refs.menu.position();
        }
    }

    _resetSearch() {
        this.set('keywords', undefined);
    }

    _onChangeShow(c, value) {
        this.set('_show', value);
    }

    /**
     * @brief let the blur method called after select
     * if we selected the option, then the keywords has been to to undefind
     * in this case, we do nothing, otherwise we reset it
     */
    _onBlur() {
        this.timer = setTimeout(() => {
            if (this.get('keywords') != null) {
                this._resetSearch();
            }
        }, 200);
    }

    _onFocus() {
        clearTimeout(this.timer);
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
}

export {Select, Option, Group as OptionGroup};
