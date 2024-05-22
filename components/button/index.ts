import {Component, ComponentConstructor, TypeDefs, inject, createRef} from 'intact';
import template from './index.vdt';
import {ButtonGroup} from './group';
import {bind} from '../utils';
import {Sizes, Colors} from '../types';
import {BUTTON_GROUP} from './constants';
import { useConfigContext } from '../config';
export * from './group';

interface ButtonHTMLAttributes {
    autofocus?: boolean
    form?: string
    formaction?: string
    formenctype?: string
    formmethod?: string
    formnovalidate?: boolean
    formtarget?: string
    // Anchor
    href?: string
    target?: string
    download?: string
}

export interface ButtonProps extends ButtonHTMLAttributes {
    type?: Colors | 'none' | 'secondary' | 'link' | 'flat'
    size?: Sizes,
    icon?: boolean
    circle?: boolean
    color?: string
    loading?: boolean
    disabled?: boolean
    fluid?: boolean
    htmlType?: 'submit' | 'reset' | 'button'
    tagName?: string | ComponentConstructor
    value?: any
    name?: string
    tabindex?: string | number
    ghost?: boolean
}

export interface ButtonEvents {
    click: [MouseEvent]
    mouseup: [MouseEvent]
}

const typeDefs: Required<TypeDefs<Omit<ButtonProps, keyof ButtonHTMLAttributes>>> = {
    type: ['default', 'primary', 'warning', 'danger', 'success', 'none', 'secondary', 'link', 'flat'],
    size: ['large', 'default', 'small', 'mini'],
    icon: Boolean,
    circle: Boolean,
    color: String,
    loading: Boolean,
    disabled: Boolean,
    fluid: Boolean,
    htmlType: String,
    tagName: [String, Function],
    value: null,
    name: String,
    tabindex: [String, Number],
    ghost: Boolean,
};

const defaults = (): Partial<ButtonProps> => ({
    type: 'default',
    size: 'default',
    htmlType: 'button',
    tagName: 'button',
    tabindex: '0',
}); 


export class Button extends Component<ButtonProps, ButtonEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private buttonGroup = inject<ButtonGroup | null>(BUTTON_GROUP, null);
    private elementRef = createRef<HTMLButtonElement>();
    private config = useConfigContext();

    showLoading() {
        this.set('loading', true);
    }

    hideLoading() {
        this.set('loading', false);
    }

    disable() {
        this.set('disabled', true);
    }

    enable() {
        this.set('disabled', false);
    }

    private isChecked(): boolean {
        const group = this.buttonGroup;
        if (!group) return false;

        const {checkType, value: groupValue} = group.get();
        const {value} = this.get();
        return value !== undefined ?
            checkType === 'radio' ? 
                value === groupValue :  
                (
                    checkType === 'checkbox' ? 
                        Array.isArray(groupValue) && !!~groupValue.indexOf(value) :
                        false
                )
            : false;
    }

    @bind
    private onClick(e: MouseEvent): void {
        if (this.get('disabled') || this.get('loading')) {
            e.preventDefault();
            return;
        }

        const buttonGroup = this.buttonGroup;
        if (buttonGroup) {
            const value = this.get('value');
            if (value !== undefined) {
                buttonGroup.setValue(value);
            }
        }

        (e as any).$component = this;
        this.trigger('click', e);
    }

    @bind
    private onMouseUp(e: MouseEvent): void {
        // when click, blur it to remove the focus style
        this.elementRef.value!.blur();
        this.trigger('mouseup', e);
    }
}
