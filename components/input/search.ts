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
    open?: boolean
}

export interface SearchEvents {
    submit: [string]
}

const typeDefs: Required<TypeDefs<SearchProps>> = {
    placeholder: String,
    value: String,
    type: ['default', 'line'],
    size: sizes,
    open: Boolean,
};

const defaults = (): Partial<SearchProps> => ({
    get placeholder() { return _$('请输入关键字') },
    value: '',
    type: 'default',
    size: 'default',
    open: false,
});

export class Search extends Component<SearchProps, SearchEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private elementRef = createRef<HTMLDivElement>();
    private inputRef = createRef<HTMLInputElement>();

    init() {
        useDocumentClick(this.elementRef, this.hide.bind(this));
    }

    open() {
        this.set('open', true);
        this.inputRef.value!.select();
    }

    hide() {
        this.set('open', false);
    }

    @bind
    onClickBtn() {
        // if the box is open, then submit the form
        if (this.get('open')) {
            this.submit();
        } else {
            this.open();
        }
    }

    @bind
    onChangeValue(v: SearchProps['value']) {
        if (!this.get('open')) return;
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
