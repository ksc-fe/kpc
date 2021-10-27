import {Component, TypeDefs, createRef} from 'intact';
import template from './search.vdt';
import {Sizes, sizes} from '../../styles/utils';
import {_$} from '../../i18n';
import {bind} from '../utils';
import {useDocumentClick} from '../../hooks/useDocumentClick';

export interface SearchProps {
    placeholder?: string
    value?: string
    type?: 'default' | 'line'
    size?: Sizes

    _open?: boolean
}

const typeDefs: Required<TypeDefs<SearchProps>> = {
    placeholder: String,
    value: String,
    type: ['default', 'line'],
    size: sizes,

    _open: null,
};

const defaults = (): Partial<SearchProps> => ({
    get placeholder() { return _$('请输入关键字') },
    value: '',
    type: 'default',
    size: 'default',

    _open: false,
});

export class Search<T extends SearchProps = SearchProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private elementRef = createRef<HTMLDivElement>();
    private inputRef = createRef<HTMLInputElement>();

    init() {
        useDocumentClick(this.elementRef, this.hide.bind(this));
    }

    open() {
        this.set('_open', true);
        this.inputRef.value!.select();
    }

    hide() {
        this.set('_open', false);
    }

    @bind
    onClickBtn() {
        // if the box is open, then submit the form
        if (this.get('_open')) {
            this.submit();
        } else {
            this.open();
        }
    }

    @bind
    onChangeValue(v: SearchProps['value']) {
        if (!this.get('_open')) return;
        this.set('value', v);
    }

    @bind
    onSubmit(e: Event) {
        e.preventDefault();
        this.submit();
    }

    submit() {
        this.trigger('submit', this.get('value')!.trim());
    }
}
