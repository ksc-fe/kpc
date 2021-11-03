import {Component, TypeDefs, inject} from 'intact';
import template from './tab.vdt';
import {TABS} from './constants';
import type {Tabs} from './';
import {bind} from '../utils';

export interface TabProps {
    value?: any
    disabled?: boolean
    to?: string | object
    closable?: boolean
}

const typeDefs: Required<TypeDefs<TabProps>> = {
    value: null,
    disabled: Boolean,
    to: [String, Object],
    closable: Boolean,
};

export class Tab extends Component<TabProps> {
    static template = template;

    private tabs = inject<Tabs>(TABS)!

    @bind
    private onClick(e: MouseEvent) {
        if (this.get('disabled')) {
            e.preventDefault();
        } else {
            this.tabs.changeTab(this.get());
            this.trigger('click', e);
        }
    }

    @bind
    private remove(e: MouseEvent) {
        e.stopPropagation();
        this.tabs.remove(this.get('value'));
    }
}
