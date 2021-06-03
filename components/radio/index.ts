import {Component, ComponentConstructor, TypeDefs, inject, createRef} from 'intact';
import {bind} from '../utils';
import template from './index.vdt';

export interface RadioProps {
    disabled?: boolean
    value?: boolean
    trueValue?: boolean
}

export default class Radio<T extends RadioProps = RadioProps> extends Component<T> {
    static template = template;
    static defaults = {
        disabled: false,
        value: false,
        trueValue: true,
    };

    static propTypes = {
        disabled: Boolean,
        // declare for camelizing in Vue dom template
        trueValue: undefined,
    }

    private isChecked(): boolean {
        return this.get('value') === this.get('trueValue');
    }

    _destroy() {
        // we should not change data in _destroy
        // if (this.isChecked()) {
            // this.set('value', undefined);
        // }
    }

    @bind
    private _onKeypress(e: KeyboardEvent): void {
        if (e.keyCode === 13) {
            this.refs.input.click();
        }
    }

    @bind
    private _onClick(e: MouseEvent): void {
        const {value, trueValue, disabled} = this.get();
        if (!disabled && value !== trueValue) {
            this.set('value', trueValue);
            this.trigger('click', e);
            this.trigger('change', trueValue, e);
        } else {
            this.trigger('click', e);
        }
    }

    @bind
    private _fixClick(e: MouseEvent): void {
        // ignore the click event from label, otherwise it will trigger click event twice
        if (e.target !== this.refs.input) {
            e.stopPropagation();
        }
    }
}

export {Radio};
