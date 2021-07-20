import {
    Component,
    provide,
    createRef,
    Children,
    TypeDefs,
    RefObject,
} from 'intact';
import template from './base.vdt';
import {Sizes, sizes} from '../../styles/utils';
import {SELECT} from './constants';
import type {Input} from '../input';
import {useShowHideEvents} from '../../hooks/useShowHideEvents';
import {bind} from '../utils';
import {Dropdown} from '../dropdown';
import {State} from '../../hooks/useState';
import {useInput} from './useInput';
import {Container} from '../portal';

export interface BaseSelectProps {
    value?: any
    multiple?: boolean
    filterable?: boolean
    loading?: boolean
    disabled?: boolean
    name?: string
    size?: Sizes
    hideIcon?: boolean
    clearable?: boolean
    fluid?: boolean
    inline?: boolean
    placeholder?: Children
    container?: Container

    _show?: boolean
}

const typeDefs: Required<TypeDefs<BaseSelectProps>> = {
    value: null,
    multiple: Boolean,
    filterable: Boolean,
    loading: Boolean,
    disabled: Boolean,
    name: String,
    size: sizes,
    hideIcon: Boolean,
    clearable: Boolean,
    fluid: Boolean,
    inline: Boolean,
    placeholder: [String, Number],
    container: [Function, String],

    _show: Boolean,
};

const defaults = (): Partial<BaseSelectProps> => ({
    size: 'default',
});

export abstract class BaseSelect<T extends BaseSelectProps = BaseSelectProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public dropdownRef = createRef<Dropdown>(); 
    public input = useInput(this.resetKeywords);

    init() {
        provide(SELECT, this);
        useShowHideEvents('_show');
        // this.input = useInput();

        this.watch('value', this.position, {presented: true});
    }

    protected abstract getPlaceholder(): Children
    protected abstract getLabel(): Children

    @bind
    position() {
        const dropdown = this.dropdownRef.value!;
        if (dropdown.get('value')) {
            dropdown.position();
        }
    }

    @bind
    show() {
        this.set('_show', true);
    }

    @bind
    hide() {
        this.set('_show', false);
    }

    public resetKeywords(keywords: State<string>) {
        keywords.set('');
    }

    private delete(index: number, e: MouseEvent) {
        if (this.get('disabled')) return;

        e.stopPropagation();

        const value = (this.get('value') as any[]).slice(0);
        value.splice(index, 1);
        this.set('value', value);
    }

    @bind
    protected clear(e: MouseEvent) {
        e.stopPropagation();
        this.set('value', this.get('multiple') ? [] : '');
    }

    @bind
    private onKeypress(e: KeyboardEvent) {
        this.trigger('keypress', e);
        switch (e.keyCode) {
            case 13: // enter
                this.show();
                break;
            case 9: // tab
            case 27: // esc
                this.hide();
                break;
        }
    }
}
