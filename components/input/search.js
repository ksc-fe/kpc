import Intact from 'intact';
import template from './search.vdt';
import '../../styles/kpc.styl';
import './search.styl';
import {_$} from '../utils';

export default class Search extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        placeholder: String,
        value: String,
        type: ['default', 'line'],
        size: ['large', 'default', 'small', 'mini'],
    };

    defaults() {
        return {
            placeholder: _$('请输入关键字'),
            value: '',
            type: 'default',
            size: 'default',

            _open: false,
        };
    }

    _mount() {
        document.addEventListener('click', this._onDocumentClick);
    }

    _onDocumentClick(e) {
        const target = e.target;
        const elem = this.element;
        if (target === elem || elem.contains(target)) return;

        this._hide();
    }

    _open() {
        this.set('_open', true);
        this.refs.input.select();
    }

    _hide() {
        this.set('_open', false);
    }

    _onClickBtn() {
        // if the box is open, then submit the form
        if (this.get('_open')) {
            this._submit();
        } else {
            this._open();
        }
    }

    _onChangeValue(c, v) {
        if (!this.get('_open')) return;
        this.set('value', v);
    }

    _onSubmit(e) {
        e.preventDefault();
        this._submit();
    }

    _submit() {
        this.trigger('submit', this.get('value').trim());
    }

    _destroy() {
        document.removeEventListener('click', this._onDocumentClick);
    }
}
