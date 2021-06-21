import {Component, provide, createRef, findDomFromVNode, Children} from 'intact';
import template from './select.vdt';
import {Sizes, sizes} from '../../styles/utils';
import {SELECT, RECORD_OPTIONS} from './constants';
import {bind} from '../utils';
import {Dropdown} from '../dropdown';
import {useRecordParent} from '../../hooks/useRecordComponent';
import {isNullOrUndefined} from 'intact-shared';
import type {Option} from './option';

export interface SelectProps {
    value: any
    multiple: boolean
    filterable: boolean
    loading: boolean
    disabled: boolean
    name: string
    keywords: string
    size: Sizes
    hideIcon: boolean
    clearable: boolean
}

export class Select<T extends SelectProps = SelectProps> extends Component<T> {
    static template = template;

    private dropdownRef = createRef<Dropdown>(); 
    private options: Option[] = [];

    init() {
        provide(SELECT, this);
        this.options = useRecordParent(RECORD_OPTIONS);
    }

    @bind
    private onClick(e: MouseEvent) {
        this.trigger('click', e);
    }

    private getLabel() {
        const {value, multiple} = this.get();

        if (isNullOrUndefined(value)) return;

        if (!multiple) {
            return getLabel(this.options, value);
        } else {
            const labels: Children[] = [];
            value.forEach((value: any) => {
                const label = getLabel(this.options, value);
                if (!isNullOrUndefined(label)) {
                    labels.push(label);
                }
            });

            return labels;
        }
    }

    private delete(index: number, e: MouseEvent) {
        if (this.get('disabled')) return;

        e.stopPropagation();

        const value = (this.get('value') as any[]).slice(0);
        value.splice(index, 1);
        this.set('value', value);
    }

    @bind
    private setWidth() {
        const menuElement = findDomFromVNode(this.dropdownRef.value!.menuVNode!, true) as HTMLElement;
        const entity = findDomFromVNode(this.$lastInput!, true) as HTMLElement; 
        menuElement.style.minWidth = `${entity.offsetWidth}px`;
    }
}

function getLabel(options: Option[], value: any) {
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        if (option.get('value') === value) {
            const label = option.get('label');
            if (isNullOrUndefined(label)) {
                return option.get('children');
            }
            return label;
        }
    }
}
