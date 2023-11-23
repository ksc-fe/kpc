import {Component, TypeDefs, inject} from 'intact';
import template from './option.vdt';
import {bind, toggleArray} from '../utils';
import {SELECT} from './constants';
import type {Select} from './select';
import { useConfigContext } from '../config';

export interface OptionProps {
    value: any
    label?: string
    disabled?: boolean
}

const typeDefs: Required<TypeDefs<OptionProps>> = {
    value: {
        required: true,
    },
    label: String,
    disabled: Boolean,
};

export class Option extends Component<OptionProps> {
    static template = template;
    static typeDefs = typeDefs;

    private select: Select<any> = inject(SELECT)!;
    private config = useConfigContext();

    @bind
    private onSelect() {
        const select = this.select!;
        const multiple = select.get('multiple');
        const value = this.get('value');

        if (!multiple) {
            select.set('value', this.get('value'));
        } else {
            let values = select.get('value');
            values = toggleArray(values, value);
            select.set('value', values);
        }
    }

    private isActive(): boolean {
        const {value: currentValue, multiple} = this.select!.get();
        const value = this.get('value');

        if (multiple) {
            if (Array.isArray(currentValue)) {
                return currentValue.includes(value);
            }
            return false;
        }

        return currentValue === value;
    }
}
