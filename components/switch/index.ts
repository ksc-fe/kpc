import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import {sizes, Sizes} from '../../styles/utils';
import {bind} from '../utils';
import {useDraggable} from './useDraggable';
import type {Events} from '../types';
import { useConfigContext } from '../config';

export interface SwitchProps<True = any, False = any> {
    name?: string
    on?: string 
    off?: string 
    value?: True | False 
    trueValue?: True 
    falseValue?: False 
    width?: number | string
    height?: number | string
    size?: Sizes
    disabled?: boolean
    loading?: boolean
    beforeChange?: (from: True | False | undefined, to: True | False | undefined) => boolean | Promise<boolean>;
}

export interface SwitchEvents {
    click: [MouseEvent]
    keypress: [KeyboardEvent]
}

export interface SwitchBlocks {
    off: null
    on: null
}

const typeDefs: Required<TypeDefs<SwitchProps>> = {
    name: String,
    on: String,
    off: String,
    value: null,
    trueValue: null,
    falseValue: null,
    width: [Number, String],
    height: [Number, String],
    size: sizes,
    disabled: Boolean,
    loading: Boolean,
    beforeChange: Function,
};

const defaults = (): Partial<SwitchProps> => ({
    value: false,
    trueValue: true,
    falseValue: false,
    size: 'default',
    loading: false,
});

const events: Events<SwitchEvents> = {
    click: true,
    keypress: true,
};

interface MouseEventWithIgnore extends MouseEvent {
    _switchIgnore?: boolean
}

export class Switch<True = true, False = false> extends Component<SwitchProps<True, False>, SwitchEvents, SwitchBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private elementRef = createRef<HTMLElement>();
    private draggable = useDraggable(this.elementRef);
    private config = useConfigContext();

    @bind
    private onClick(e: MouseEventWithIgnore) {
        if (!e._switchIgnore) {
            this.toggle(false);
        }
        this.trigger('click', e);
    }

    @bind
    private onClickOnHandle(e: MouseEventWithIgnore) {
        // we can not stop propagation, otherwise the click can not be listen at outer
        const {beforeChange} = this.get();
        e._switchIgnore = !beforeChange;
    }

    @bind
    private onKeypress(e: KeyboardEvent) {
        this.trigger('keypress', e);
        if (e.keyCode === 13) {
            this.toggle(true);
        }
    }

    public async toggle(isKeypress: boolean) {
        const {disabled, beforeChange, value, trueValue, falseValue} = this.get();
        if (disabled) return;

        // if is not keypress, we blur it to remove focus style
        if (!isKeypress) {
            this.elementRef.value!.blur();
        }
         
        if (beforeChange) {
            this.set({
                disabled: true,
                loading: true
            });
            try {
                const toValue = this.isChecked() ? falseValue : trueValue;
                const ret = await beforeChange(value, toValue);
                if (!ret) return;
            } finally {
                this.set({
                    disabled: false,
                    loading: false
                });
            }
        }

         if (this.isChecked()) {
             this.uncheck();
         } else {
             this.check();
         }
    }

    public isChecked() {
        return this.get('value') === this.get('trueValue');
    }

    public check() {
        this.set('value', this.get('trueValue'));
    }

    public uncheck() {
        this.set('value', this.get('falseValue'));
    }
}
