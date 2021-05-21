import {Component, ComponentConstructor, TypeDefs, inject, createRef} from 'intact';
import template from './index.vdt';
// import '../../styles/kpc.styl';
// import './index.styl';
import {ButtonGroup} from './group';
import {bind} from '../utils';
import '../styles/global';

export interface ButtonProps {
    type?: 'default' | 'primary' | 'warning' | 'danger' | 'success' | 'none' | 'secondary' | 'link'
    size?: 'large' | 'default' | 'small' | 'mini'
    icon?: boolean
    circle?: boolean
    loading?: boolean
    disabled?: boolean
    fluid?: boolean
    htmlType?: string
    tagName?: string | ComponentConstructor
    tagProps?: Record<string, any> 
    value?: any
    name?: string
    tabindex?: string | number
    ghost?: boolean
}

const typeDefs: TypeDefs<ButtonProps> = {
    type: ['default', 'primary', 'warning', 'danger', 'success', 'none', 'secondary', 'link'],
    size: ['large', 'default', 'small', 'mini'],
    icon: Boolean,
    loading: Boolean,
    disabled: Boolean,
    fluid: Boolean,
    htmlType: String,
    tagName: [String, Function],
    tagProps: Object,
    name: String,
    tabindex: [String, Number],
    ghost: Boolean,
};

const defaults: Partial<ButtonProps> = {
    type: 'default',
    size: 'default',
    icon: false,
    circle: false,
    loading: false,
    disabled: false,
    fluid: false,
    htmlType: 'button',
    tagName: 'button',
    tabindex: '0',
    ghost: false,
} 

export default class Button<T extends ButtonProps = ButtonProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private buttonGroup: ButtonGroup | null = null;
    private elementRef = createRef<HTMLButtonElement>();

    init() {
        this.buttonGroup = inject('ButtonGroup', null);
    }

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

export {Button, ButtonGroup}
